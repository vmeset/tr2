import React from "react";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state
        }
    }
}

export const loginThunk = (email, password) => (dispatch) => {
    authAPI.login(email, password).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(authThunk())
        } else {
            let message = response.data.messages[0].length > 0 ? response.data.messages[0] : "Error"
            dispatch(stopSubmit("login", {_error: message}))
        }
    })
}
export const logoutThunk = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}
export const authThunk = () => (dispatch) => {
    return authAPI.setAuth().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}
export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export default authReducer