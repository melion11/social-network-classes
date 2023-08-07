import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialog/DialogItem";
import {MessageSenderContainer} from "./Message/MessageSender/MessageSenderContainer";
import {DialogType, MessageType} from "../../redux/redux-store";
import {Login} from "../Login/Login";
import {LoginContainer} from "../Login/LoginContainer";
import {Redirect} from "react-router-dom";

export type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    isAuth: boolean
}


export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.messages.map(message => <Message key={message.id} id={message.id} message={message.message}/>)

    if (!props.isAuth) return <Redirect to={'/login'}/>

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

