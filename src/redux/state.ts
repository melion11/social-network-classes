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

export type StoreType = {
    _callSubscriber: (state:StateType)=>void
    _state: StateType
    getState: ()=>StateType
    subscribe: (observer:(state:StateType)=>void)=>void
    dispatch: (action: UnionType)=>void
}


export const store:StoreType = {
    _callSubscriber(state: StateType) {
        console.log('no observer')
    },
    _state: {
        profilePage: {
            posts:[
                {id: 1,message: 'Hello, my name is Ilya', likeCount: 15},
                {id: 2,message: 'Im busy', likeCount: 20}
            ],
            newPostText: 'it-kamasutra',
        } ,
        dialogsPage: {
            dialogs:[
                {id: 1, name: 'Pavel'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Vlad'},
                {id: 4, name: 'Nastya'},
                {id: 5, name: 'Dima'}
            ],
            messages:[
                {id: 1, message: 'Hello, how are you?'},
                {id: 2, message: 'Im fine, thx'},
                {id: 3, message: 'Okay'}
            ],
            newMessageText: ''
        }
    },
    getState() {
        return  this._state
    },
    subscribe(observer: (state: StateType)=> void){
       this._callSubscriber = observer
    },
    dispatch(action: UnionType) {
       this._state.profilePage = profileReducer(this._state.profilePage, action)
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
       this._callSubscriber(this._state)

    }
    //     if (action.type === 'ADD-POST') {
    //         let newPost =  {id: 3,message: this._state.profilePage.newPostText, likeCount: 0}
    //         this._state.profilePage.posts.unshift(newPost)
    //         this._state.profilePage.newPostText = ''
    //         this._callSubscriber(this._state)
    //     }
    //     else if ( action.type === 'UPDATE-POST') {
    //         this._state.profilePage.newPostText = action.payload.newText
    //         this._callSubscriber(this._state)
    //     }
    //     else if (action.type === 'NEW-MESSAGE') {
    //         let newMessage = {id: 4 , message: this._state.dialogsPage.newMessageText}
    //         this._state.dialogsPage.messages.push(newMessage)
    //         this._state.dialogsPage.newMessageText = ''
    //         this._callSubscriber(this._state)
    //     }
    //     else if (action.type === 'UPDATE-MESSAGE') {
    //         this._state.dialogsPage.newMessageText = action.payload.updateMessageText
    //         this._callSubscriber(this._state)
    //     }
    // }
}

export type UnionType = AddPostACType | UpdatePostACType | NewMessageACType | UpdateMessageACType

