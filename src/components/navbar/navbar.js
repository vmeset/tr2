import React from "react";
import styles from './navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
                <NavLink to='/profile'><div>My profile</div></NavLink>
            <div>
                <NavLink to='/users'>Friends</NavLink>
            </div>
            <div>
                <NavLink to='/another'>another page</NavLink>
            </div>
            <div>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </div>
    )
}

export default Navbar