import React from "react";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {authThunk} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
}

export const initializeSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authThunk())
    promise.then(() => {
        dispatch(initializeSuccess())
    })
}

export default appReducer