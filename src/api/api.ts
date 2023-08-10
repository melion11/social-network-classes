import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '657a93da-d266-4c0b-9fc8-fdc066332027'}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize:number) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getFollow(userId: number){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    getUnfollow(userId: number){
        return  instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status: status})

    }
}


export const authAPI = {
    getAuth(){
        return instance.get('auth/me').then(response => response.data)
    }
}


