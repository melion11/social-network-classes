import {AppThunk, ProfilePageType, UserProfileType} from '../redux-store';
import {profileAPI, usersAPI} from '../../api/api';
import {toggleIsFetching} from './appReducer';


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hello, my name is Ilya', likeCount: 15},
        {id: 2, message: 'Im busy', likeCount: 20}
    ],
    userProfile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: ''
        },
    },
    status: ''
}


export type UnionType = AddPostACType | SetUserACType | GetStatusACType | SetUserStatusType


export const profileReducer = (state: ProfilePageType = initialState, action: UnionType): ProfilePageType => {
    switch (action.type) {
        case '/profile/ADD-POST': {
            let newPost = {id: 3, message: action.payload.newMessageBody, likeCount: 0}
            return {...state, posts: [newPost, ...state.posts]}
        }
        case '/profile/SET-USER': {
            return {...state, userProfile: action.payload.user}
        }
        case '/profile/GET-STATUS': {
            return {...state, status: action.payload.statusText}
        }
        case '/profile/SET-STATUS': {
            return {...state, status: action.payload.status}
        }

        default:
            return state
    }
}

export type AddPostACType = ReturnType<typeof addPost>
export const addPost = (newMessageBody: string) => {
    return {
        type: '/profile/ADD-POST',
        payload: {
            newMessageBody
        }
    } as const
}

export type SetUserACType = ReturnType<typeof setUser>
export const setUser = (user: UserProfileType) => {
    return {
        type: '/profile/SET-USER',
        payload: {
            user
        }
    } as const
}


export type GetStatusACType = ReturnType<typeof getUserStatus>
export const getUserStatus = (statusText: string) => {
    return {
        type: '/profile/GET-STATUS',
        payload: {
            statusText
        }
    } as const
}


export type SetUserStatusType = ReturnType<typeof setUserStatus>
export const setUserStatus = (status: string) => {
    return {
        type: '/profile/SET-STATUS',
        payload: {
            status
        }
    } as const
}

export const getProfile = (userId: number): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await usersAPI.getProfile(userId)
    dispatch(toggleIsFetching(false))
    dispatch(setUser(data))

}

export const getStatus = (userId: number): AppThunk => async (dispatch) => {
    const status = await profileAPI.getStatus(userId)
    dispatch(getUserStatus(status))
}

export const updateStatus = (status: string): AppThunk => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}