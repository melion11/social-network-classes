import {combineReducers, createStore} from "redux";
import {AddPostACType, profileReducer, UpdatePostACType} from "./profileReducer";
import {dialogsReducer, NewMessageACType, UpdateMessageACType} from "./dialogsReducer";
import {
    GetFollowACType,
    GetUnfollowACType,
    SetSelectedPageACType,
    SetTotalUserCountACType,
    SetUsersACType, ToggleIsFetchingACType,
    userReducer
} from "./userReducer";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {small: string, large: string}
    status: string
    followed: boolean

}
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
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
    UpdatePostACType | GetFollowACType | GetUnfollowACType | SetUsersACType |
    SetSelectedPageACType | SetTotalUserCountACType | ToggleIsFetchingACType

export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
})

export  const  store = createStore(reducers);



