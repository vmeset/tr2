import React from "react";
import styles from "./style.module.css"
import {Field, reduxForm} from "redux-form";
import {required} from "./utilities/validators";
import authReducer, {authThunk, loginThunk} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={styles.profile}>
            <div>
                <Field name='email' component='input' validate={required}/>
            </div>
            <div>
                <Field name='password' component='input' type='password'/>
            </div>
            {/*<div>*/}
            {/*    <Field name='rememberMe' type='checkbox' component='input'>*/}
            {/*        remember me*/}
            {/*    </Field>*/}
            {/*</div>*/}
            {props.error && <div>
                {props.error}
            </div>}
            <button type="submit">login</button>
        </form>
    )
}

const ReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password)
        console.log(props.isAuth)
        if (props.isAuth) {
            return <Redirect to="/profile" />
        }
    }

    return (
        <div>
            <ReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunk})(Login)