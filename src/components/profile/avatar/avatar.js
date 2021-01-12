import React, {useState} from "react";
import styles from "../profile.module.css";

const Avatar = (props) => {

    let [newPhoto, setPhoto] = useState(null)

    let uploadFile = (e) => {
        let newFile = e.target.files[0]
        setPhoto(newFile)
    }

    let sendFile = () => {
        props.updatePhoto(newPhoto)
    }

    return (
        <div className={styles.avatar}>
            <img src={props.profile.photos.large != null ? props.profile.photos.large
                : 'https://cdn1.iconfinder.com/data/icons/social-shade-rounded-rects/512/anonymous-512.png'}/>
            {props.isOwner && <div>
                <input type="file" name="file" onChange={uploadFile}/>
                <button onClick={sendFile}>Upload</button>
            </div>
            }
        </div>
    )
}

export default Avatar