import React from "react";
import Another from "./another";
import {connect} from "react-redux";
import {setAvatarThunk} from "../redux/another-reducer";

class AnotherContainer extends React.Component {
    componentDidMount() {
        this.props.setAvatarThunk(2)
    }
    render() {
        return (
            <Another {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        avatar: state.anotherPage.avatar,
        profile: state.anotherPage.profile
    })
}

export default connect(mapStateToProps, {setAvatarThunk})(AnotherContainer)