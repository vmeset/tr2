import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import anotherReducer from "./another-reducer";
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer";

let reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    anotherPage: anotherReducer,
    form: formReducer, // обязательный редьюсер для редакс форм
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// applyMiddleware(thunkMiddleware) для асинхронных экшенов, например для АПИшки

window.store = store

export default store