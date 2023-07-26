import React from 'react';
import {newMessageAC, updateMessageAC} from "../../../../redux/dialogsReducer";
import {MessageSender} from "./MessageSender";

export type MessageSenderPropsType = {
    store: any
}


export const MessageSenderContainer = (props: MessageSenderPropsType) => {

    const newMessageText = props.store.getState().dialogsPage.newMessageText

    const newMessageHandler = () => props.store.dispatch(newMessageAC())

    const updateNewMessageHandler = (text: string) => {
        props.store.dispatch(updateMessageAC(text))
    }


    return <MessageSender newMessageText={newMessageText}
                          getNewMessage={newMessageHandler}
                          updateNewMessage={updateNewMessageHandler}
    />
};

