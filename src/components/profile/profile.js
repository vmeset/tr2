import React from "react";
import styles from "./profile.module.css"
import Preloader from "../preloader";
import StatusWithHooks from "./status/StatusWithHooks";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../utilities/validators";
import {Textarea} from "../utilities/form-control";
import Avatar from "./avatar/avatar";
import ProfileInfo from "./info/profileInfo";

const maxLength5 = maxLength(50)

const PostFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='post' component={Textarea} validate={[required, maxLength5]} placeholder="message" />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

let PostReduxForm = reduxForm({form: 'post'})(PostFrom)

const Profile = (props) => {
    let addPost = (values) => {
        props.addPost(values.post)
        values.post = ''
    }

    let posts = props.posts.map(el => <div className={styles.post}>{el.message}</div>)

    if (!props.profile) {
        return (<Preloader />)
    }

    return (
        <div className={styles.profile}>
            <Avatar isOwner={props.isOwner}
                    profile={props.profile}
                    updatePhoto={props.updatePhoto} />
            <div className={styles.profileAbout}>
                <div>
                    <h1>
                        {props.profile.fullName}
                    </h1>
                </div>
                <StatusWithHooks status={props.status} updateStatus={props.updateStatusThunk} />
                {/*<div>*/}
                {/*    {props.profile.aboutMe}*/}
                {/*</div>*/}
                <ProfileInfo profile={props.profile} isOwner={props.isOwner} />
            </div>
            <div className={styles.newPost} onSubmit={addPost}>
                <PostReduxForm onSubmit={addPost} />
            </div>
            <div className={styles.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Profile