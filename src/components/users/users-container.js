import React from "react";
import {connect} from "react-redux";
import {
    followThunk, getUsers,
    setCurrentPage,
    toggleFollowProgress,
    unFollowThunk
} from "../../redux/users-reducer";
import Users from "./users";
import Preloader from "../preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
        // this.props.setIsFetching(true)
        // usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(response => {
        //     this.props.setIsFetching(false)
        //     this.props.setUsers(response.data.items)
        //     this.props.setTotalUsers(response.data.totalCount)
        // })
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber)
        // this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(this.props.pageSize, pageNumber).then(response => {
        //     this.props.setIsFetching(false)
        //     this.props.setUsers(response.data.items)
        // })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalCount={this.props.totalCount}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   isFetching={this.props.isFetching}
                   followProgress={this.props.followProgress}
                   followThunk={this.props.followThunk}
                   unFollowThunk={this.props.unFollowThunk}
                   portionSize={this.props.portionSize}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProgress: state.usersPage.followProgress,
        isAuth: state.auth.isAuth,
        portionSize: state.usersPage.portionSize
    }
}

// let AuthRedirect =  WithAuthRedirect(UsersAPIContainer)
//
// let UsersContainer = connect(mapStateToProps, {
//     setCurrentPage,
//     toggleFollowProgress,
//     getUsers,
//     followThunk,
//     unFollowThunk
//
// })(AuthRedirect)

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowProgress,
        getUsers,
        followThunk,
        unFollowThunk
    }),
    WithAuthRedirect
)(UsersContainer)

// export default UsersContainer