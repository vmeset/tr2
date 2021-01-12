import React from "react";
import {connect} from "react-redux";
import Profile from "./profile";
import {
    addPost,
    getUserStatusThunk,
    profileThunk, updatePhoto,
    updateStatusThunk
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile(){
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedId
        }

        this.props.profileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        autorizedId: state.auth.id
    }
}

// let AuthRedirectComponent = WithAuthRedirect(ProfileAPI)
//
// let WithRouterComponent = withRouter(AuthRedirectComponent)
//
// const ProfileContainer = connect(mapStateToProps, {updatePost, addPost, profileThunk})(WithRouterComponent)

export default compose(
    connect(mapStateToProps,
    {addPost, profileThunk, getUserStatusThunk, updateStatusThunk, updatePhoto}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)