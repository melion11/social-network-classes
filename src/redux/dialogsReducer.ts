import {DialogsPageType} from "./redux-store";



const initialState : DialogsPageType = {
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

export type UnionType = NewMessageACType


export const dialogsReducer = (state: DialogsPageType = initialState, action:UnionType) : DialogsPageType => {
        switch (action.type) {
            case "NEW-MESSAGE": {
                let newMessage = {id: 4 , message: action.payload.newMessageBody}
                return {...state, messages: [...state.messages, newMessage]}
            }
            default: return state
        }
}




export type NewMessageACType = ReturnType<typeof newMessage>
export const newMessage = (newMessageBody: string) => {
    return {
        type: 'NEW-MESSAGE',
        payload: {
            newMessageBody
        }
    } as const
}

