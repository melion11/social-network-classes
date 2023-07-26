import {combineReducers, createStore} from "redux";
import {AddPostACType, profileReducer, UpdatePostACType} from "./profileReducer";
import {dialogsReducer, NewMessageACType, UpdateMessageACType} from "./dialogsReducer";

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
}

export type UnionType = NewMessageACType | UpdateMessageACType | AddPostACType | UpdatePostACType



export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export  const  store = createStore(reducers);



