import React from "react";
import styles from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const logout = () => {
        props.logoutThunk()
    }

    return (
        <div className={styles.headerBlock}>
            <div className={styles.logo}>
            </div>
            <div className={styles.covidLogo}>
                #stayhome
            </div>
            <div className={styles.headArea}>
                <div className={styles.login}>
                    <div>
                        {props.isAuth
                            ? <div>
                                {props.login}
                                <img src={props.profile.photos.small
                                    ? props.profile.photos.small
                                    : 'https://sun9-55.userapi.com/c629422/v629422438/33c73/kOjkEOE8feU.jpg'}  />
                                <button onClick={logout}>Logout</button>
                            </div>
                            : <NavLink to={'/login'}>
                                login
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header