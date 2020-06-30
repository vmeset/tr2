import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {authThunk, logoutThunk} from "../../redux/auth-reducer";
import styles from '../../App.module.css'

class HeaderContainer extends React.Component {

    render() {
        return <Header className={styles.header} {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
    login: state.auth.login,
    profile: state.profilePage.profile,
    // avatar: state.profilePage.profile.photos.small,
    fullName: state.profilePage.profile.fullName
})

export default connect(mapStateToProps, {authThunk, logoutThunk})(HeaderContainer)