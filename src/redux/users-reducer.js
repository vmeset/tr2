import React from "react";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_TOGGLE_FOLLOW = 'SET_TOGGLE_FOLLOW'

let initialState = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followProgress: [],
    // че за фоллоу прогресс ??????????
    portionSize: 10
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USER:
            return {
                ...state,
                users: action.newUsers
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalCount: action.totalUsers
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
            // ??????????????????????????????????????????????????????????????????????????????????
        case SET_TOGGLE_FOLLOW: {
            return {
                ...state,
                followProgress: action.isFetching
                    ? [...state.followProgress, action.userID]
                    : state.followProgress.filter(id => id != action.userID)
            }
            // ??????????????????????????????????????????????????????????????????????????????????
        }
        default:
            return state
    }
}

export const follow = (userID) => {
    return ({
        type: FOLLOW,
        userID
    })
}
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (newUsers) => ({type: SET_USER, newUsers: newUsers})
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_PAGES, totalUsers})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const toggleFollowProgress = (isFetching, userId) => ({type: SET_TOGGLE_FOLLOW, isFetching, userId})
export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(pageSize, currentPage).then(response => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsers(response.data.totalCount))
        })
    }
}
export const unFollowThunk = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowProgress(true, userID))
        usersAPI.unFollow(userID).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollow(userID))
            }
            dispatch(toggleFollowProgress(false, userID))
        })
    }
}
export const followThunk = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowProgress(true, userID))
        usersAPI.follow(userID).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(follow(userID))
            }
            dispatch(toggleFollowProgress(false, userID))
        })
    }
}

export default usersReducer