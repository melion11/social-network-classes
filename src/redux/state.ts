let rerenderEntireThree = (state: StateType) => {

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
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state : StateType = {
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

}


export const addUserPost = ()  => {
    let newPost =  {id: 3,message: state.profilePage.newPostText, likeCount: 0}
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireThree(state)
}

export const updateNewPostText = (updatePostText: string)  => {
        state.profilePage.newPostText = updatePostText
    rerenderEntireThree(state)
}

export const subscribe = (observer: (state:StateType)=> void) => {
    rerenderEntireThree = observer
}