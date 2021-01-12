import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForma = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="loginmf" component="input" placeholder="Login" />
            <Field name="passmf" component="input" placeholder="Pass" />
            <Field name="remembermf" component="input" type="checkbox" /> remember me
            <button>
                go
            </button>
        </form>
    )
}

const LoginReduxForma = reduxForm({form: "loginizator"})(LoginForma)

const MyForms = () => {
    const onSubmitik = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>My form</h1>
            <LoginReduxForma onSubmit={onSubmitik} />
        </div>
    )
}

export default MyForms