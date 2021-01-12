import styles from "../profile.module.css";
import React from "react";

const ProfileData = (props) => {

    return (
        <div>
            <div>
                <span>
                    Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}
                </span>
                <div>
                    {props.profile.lookingForAJob && <b>{props.profile.lookingForAJobDescription}</b>}
                </div>
            </div>
            <div>
                <div>Contacts:</div>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
            </div>
            {props.isOwner &&
            <button className={styles.showInfoButton}
                    onClick={() => {
                        props.activateEditMode(true)
                    }}>
                Edit
            </button>}
        </div>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div className={styles.contactsSocials}>
            {contactTitle}: {contactValue}
        </div>
    )
}

export default ProfileData