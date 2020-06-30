import React, {useState} from "react";
import styles from "../profile.module.css";

const Avatar = (props) => {
    let [avatar, setAvatar] = useState(null)

    let uploadFile = (event) => {
        // let image = {
        //     newPhoto: event.target.files[0]
        //     // loaded: 0
        // }
        let newPhoto = event.target.files[0]
        setAvatar(newPhoto)
        // console.log(image)
        // console.log(avatar)
        // props.uploadAvatar(event.target.files[0])
    }

    let uploadAvatar = () => {
        // const newPhoto = new FormData()
        // newPhoto.append('file', props.profile.avatar)
        // console.log(newPhoto)
        console.log(avatar)
        props.uploadPhotoThunk(avatar)
    }

    return (
        <div className={styles.avatar}>
            <img src={props.profile.photos.large != null ? props.profile.photos.large
                : 'https://sun9-55.userapi.com/c629422/v629422438/33c73/kOjkEOE8feU.jpg'}/>
            <input type="file" name="file" onChange={uploadFile}/>
            <button onClick={uploadAvatar}>upload</button>
        </div>
    )
}

export default Avatar