import styles from "../profile.module.css";
import React, {useState} from "react";
import ProfileData from "../profileData/profileData";
import ProfileDataForm from "../profileData/profileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [showFullInfo, setShowFullInfo] = useState(false)

    let toggleShowFullInfo = () => {
        setShowFullInfo(!showFullInfo)
        setEditMode(false)
    }

    let activateEditMode = () => {
        setEditMode(true)
    }

    return (
        <div className={styles.info}>
            {showFullInfo
                ? <div>
                    <button onClick={toggleShowFullInfo} className={styles.showInfoButton}>
                        Hide full information
                    </button>
                    {editMode
                        ? <ProfileDataForm />
                        : <ProfileData showFullInfo={showFullInfo} activateEditMode={activateEditMode}
                                       toggleShowFullInfo={toggleShowFullInfo} profile={props.profile}
                                       isOwner={props.isOwner}
                        />}
                </div>
                : <button onClick={toggleShowFullInfo} className={styles.showInfoButton}>
                    Show full information
                </button>
            }
        </div>
    )
}

export default ProfileInfo

