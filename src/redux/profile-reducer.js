import React from "react";
import {profileAPI, uploadPhoto, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const UPLOAD_PHOTO = 'UPLOAD_PHOTO'

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
        case UPLOAD_PHOTO: {
            return {
                ...state,
                avatar: action.newPhoto
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
export const updatePhoto = (newPhoto) => ({type: UPLOAD_PHOTO, newPhoto})

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

export const uploadAvatar = (newPhoto) => (dispatch) => {
    dispatch(updatePhoto(newPhoto))
}

export const uploadPhotoThunk = (newPhoto) => (dispatch) => {
    profileAPI.uploadNewPhoto(newPhoto).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(updatePhoto(newPhoto))
        } else if (response.data.resultCode === 1){
            console.log(response.data.messages)
        }
    })
}

export default profileReducer