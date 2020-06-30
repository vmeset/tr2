import React from "react";
import styles from "./users.module.css"
import {NavLink} from "react-router-dom";
import Paginator from "./paginator/paginator";

let Users = (props) => {
    return (
        <div  className={styles.usersList}>
            <Paginator totalCount={props.totalCount} portionSize={props.portionSize}
                       currentPage={props.currentPage} onPageChange={props.onPageChange} />
            {props.users.map(u => {
                return (
                    <div id={u.id}>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small
                                : 'https://c7.hotpng.com/preview/870/943/660/anonymous-computer-icons-security-hacker-avatar-anonymous.jpg'}/>
                        </NavLink>
                        <div>
                            {u.name}
                        </div>
                        {u.followed ? <button disabled={props.followProgress.some(id => id === u.id)}
                                              onClick={() => { props.unFollowThunk(u.id) }}>Unfollow</button>
                            : <button disabled={props.followProgress.some(id => id === u.id)}
                                      onClick={() => { props.followThunk(u.id) }}>Follow</button>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Users