import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialog/DialogItem";
import {MessageSenderContainer} from "./Message/MessageSender/MessageSenderContainer";
import {DialogType, MessageType} from "../../redux/redux-store";

export type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]

}


export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.messages.map(message => <Message id={message.id} message={message.message}/>)


    return (

        <div className={s.dialogsWrapperContent}>
            <div className={s.dialogWrapper}>
                <ul className={s.dialogList}>
                    {dialogsElements}
                </ul>
            </div>

            <div className={s.messagesWrapper}>
                <ul className={s.messagesList}>
                    {messagesElements}
                </ul>

                <MessageSenderContainer/>

            </div>
        </div>

    );
};

