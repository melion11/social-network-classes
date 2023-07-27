import {DialogsPageType, UnionType} from "./redux-store";


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
    ],
        newMessageText: ''
}


export const dialogsReducer = (state: DialogsPageType = initialState, action:UnionType) : DialogsPageType => {
        switch (action.type) {
            case "NEW-MESSAGE": {
                let newMessage = {id: 4 , message: state.newMessageText}
                state.newMessageText = ''
                return {...state, messages: [...state.messages, newMessage]}
            }
            case "UPDATE-MESSAGE": {
                   return {...state, newMessageText: action.payload.updateMessageText}

            }
            default: return state
        }
}




export type NewMessageACType = ReturnType<typeof newMessageAC>
export const newMessageAC = () => {
    return {
        type: 'NEW-MESSAGE',
    } as const
}

export type UpdateMessageACType = ReturnType<typeof updateMessageAC>
export const updateMessageAC = (updateMessageText: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        payload: {
            updateMessageText
        }
    } as const
}