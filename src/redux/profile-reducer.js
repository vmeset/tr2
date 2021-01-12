import React from "react";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const UPDATE_PHOTO_SUCCES = 'UPDATE_PHOTO_SUCCES'

let initialState = {
    posts: [
        {name: 'AA', message: 'hi'},
        {name: 'Vik', message: 'salut'},
        {name: 'Mike', message: 'Hola'}
    ],
    profile: {
        fullName: 'name',
        photos: {
            large: "",
            small: ""
        }
    },
    editMode: false,
    status: 'status'
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {message: action.post}],
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_PHOTO_SUCCES: {
            return {
                ...state,
                profile: {...state.profile, photos: action.newPhoto}
            }
        }
        default: {
            return state
        }
    }
}

export const addPost = (post) => {
    return ({type: ADD_POST, post})
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const updateStatus = (status) => ({type: UPDATE_STATUS, status})
export const updatePhotoSuccess = (newPhoto) => ({type: UPDATE_PHOTO_SUCCES, newPhoto})
export const profileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.setUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(updateStatus(status))
            }
        })
    }
}
export const updatePhoto = (newPhoto) => (dispatch) => {
    profileAPI.uploadNewPhoto(newPhoto).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(updatePhotoSuccess(response.data.data.photos))
        } else if (response.data.resultCode === 1){
            alert(response.data.messages)
        }
    })
}

export default profileReducer