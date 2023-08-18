import {AppThunk, PhotosType, ProfilePageType, StateType, UserProfileType} from '../redux-store';
import {profileAPI, usersAPI} from '../../api/api';
import {toggleIsFetching} from './appReducer';
import {
    ProfileDescriptionDataFormType
} from '../../components/Profile/ProfileInfo/ProfileDescriptionForm/ProfileDescriptionForm';
import {stopSubmit} from 'redux-form';



const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hello, my name is Ilya', likeCount: 15},
        {id: 2, message: 'Im busy', likeCount: 20}
    ],
    userProfile: {
        aboutMe: '',
        contacts: {},
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: ''
        },
    },
    status: null
}


export type UnionType = AddPostACType | SetUserACType | GetStatusACType | SetUserStatusType | SetUserPhotoType


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
        case '/profile/SET-USER-PHOTO': {
            return {...state, userProfile: {...state.userProfile,
                    photos: action.payload.image}}
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

export type SetUserPhotoType = ReturnType<typeof setUserPhoto>
export const setUserPhoto = (image: PhotosType) => {
    return {
        type: '/profile/SET-USER-PHOTO',
        payload: {
            image
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
    if (data.data.resultCode === 0) dispatch(setUserStatus(status))
    }

export const updatePhoto = (image: File):AppThunk => async  (dispatch) => {
    const response = await profileAPI.updatePhoto(image)
    if (response.data.resultCode === 0) {
        dispatch(setUserPhoto(response.data.data.photos))

    }
}

export const saveProfile = (newProfileData: ProfileDescriptionDataFormType):AppThunk => async (dispatch,getState: () => StateType) => {
    const userId = getState().profilePage.userProfile.userId
    const response = await profileAPI.updateProfile({...newProfileData})
    if (response.data.resultCode === 0) {
        if (userId) dispatch(getProfile(userId))
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('edit-profile', {_error: message}))
        return Promise.reject(response.data.messages[0])
    }
}