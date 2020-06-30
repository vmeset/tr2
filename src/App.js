import React from 'react';
import Navbar from "./components/navbar/navbar";
import styles from './App.module.css'
import {Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/profile/profile-container";
import UsersContainer from "./components/users/users-container";
import HeaderContainer from "./components/header/header-container";
import Login from "./components/login";
import AnotherContainer from "./components/anotherContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/preloader";
import Settings from "./components/settings/settings";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
             return <Preloader />
        }
        return (
            // <BrowserRouter>
                <div className={styles.app}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={styles.content}>
                        <Route path='/profile/:userId?'>
                            <ProfileContainer/>
                        </Route>
                        <Route path='/users'>
                            <UsersContainer/>
                        </Route>
                        <Route path='/another'>
                            <AnotherContainer/>
                        </Route>
                        <Route path='/login'>
                            <Login/>
                        </Route>
                        <Route path='/settings'>
                            <Settings />
                        </Route>
                    </div>
                </div>
            // </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);