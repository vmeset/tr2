import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0e2a91fd-5f5a-4f6c-ad90-9be789b4c9a8'
    }
})

export const usersAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    unFollow(id = 1) {
        return instance.delete(`follow/${id}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    setUserProfile(userId = 0) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    setAuth( ) {
        return instance.get(`auth/me`)
    },
    login(email, password){
        return instance.post(`auth/login/`, {email: email, password: password})
    },
    logout(){
        return instance.delete(`auth/login/`)
    }
}

export const profileAPI = {
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    },
    uploadNewPhoto(newPhoto) {
        return instance.put(`profile/photo`, {image: newPhoto})
    }
}