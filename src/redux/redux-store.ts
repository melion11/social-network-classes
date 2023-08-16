import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {userReducer} from "./reducers/userReducer";
import {authReducer} from "./reducers/authReducer";
import { reducer as formReducer } from 'redux-form'
import thunk, {ThunkAction} from 'redux-thunk';
import {appReducer} from './reducers/appReducer';


export type PhotosType = {
    small: string,
    large: string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
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
    followingInProgress: number[]
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type ProfilePageType = {
    posts: PostType[]
    userProfile: UserProfileType
    status: string
}

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AppPageType = {
    initialized: boolean
    isFetching: boolean
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    auth: AuthType
    appPage: AppPageType
}

export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    appPage: appReducer,
    form: formReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export  const  store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));


export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    AnyAction>

// @ts-ignore
window.store = store


