import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./auth-Reducer";
import thunk from "redux-thunk";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {small: string, large: string}
    status: string
    followed: boolean

}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type UserProfileContacts = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type UserProfilePhotosType = {
    small: string
    large: string
}
export type UserProfileType =  {
    aboutMe: string
    contacts: UserProfileContacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: UserProfilePhotosType
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    userProfile: UserProfileType
    isFetching: boolean
}

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    auth: AuthType
}

export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer
})

export  const  store = createStore(reducers, applyMiddleware(thunk));





