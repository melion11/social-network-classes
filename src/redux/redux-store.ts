import {combineReducers, createStore} from "redux";
import {AddPostACType, profileReducer, UpdatePostACType} from "./profileReducer";
import {dialogsReducer, NewMessageACType, UpdateMessageACType} from "./dialogsReducer";
import {GetFollowACType, GetUnfollowACType, SetUsersACType, userReducer} from "./userReducer";

export type UserType = {
    userId: number
    userAvatar: string
    fullName: string
    location: {country: string,city: string}
    userStatus: string
    follow: boolean
}
export type UsersPageType = {
    users: UserType[]
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
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
}

export type UnionType = NewMessageACType | UpdateMessageACType | AddPostACType |
    UpdatePostACType | GetFollowACType | GetUnfollowACType | SetUsersACType

export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
})

export  const  store = createStore(reducers);



