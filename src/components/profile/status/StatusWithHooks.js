import React, {useState} from "react";
import styles from "../profile.module.css";

const StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let changeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={styles.status}>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={deActivateEditMode}
                           onChange={changeStatus}
                           value={status} />
                </div>
                }
        </div>
    )
}


export default StatusWithHooks