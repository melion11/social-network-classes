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
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionType = {
    type: string
    [key:string]: any
}


export const store = {
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
            ]
        }
    },

    getState() {
        return  this._state
    },
    subscribe(observer: (state: StateType)=> void){
       this._callSubscriber = observer
    },
    dispatch(action: UnionType) {
        if (action.type === 'ADD-POST') {
            let newPost =  {id: 3,message: this._state.profilePage.newPostText, likeCount: 0}
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
        else if ( action.type === 'UPDATE-POST') {
            this._state.profilePage.newPostText = action.payload.newText
            this._callSubscriber(this._state)
        }
    }
}


export type UnionType = AddPostACType | UpdatePostACType


export type AddPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export type UpdatePostACType = ReturnType<typeof updatePostAC>

export const updatePostAC = (newText: string) => {
    return {
        type: 'UPDATE-POST',
        payload: {
            newText
        }
    } as const
}