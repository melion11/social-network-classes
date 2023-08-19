import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialog/DialogItem";
import MessageSender, {MessageInputType} from './Message/MessageSender/MessageSender';
import {DialogType, MessageType} from '../../redux/reducers/dialogsReducer';

export type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: (newMessageBody: string)=>void
}


export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.messages.map(message => <Message key={message.id} id={message.id} message={message.message}/>)

    const addNewMessageHandler = (values: MessageInputType) => {
        props.newMessage(values.newMessageBody)
    }

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
                   <MessageSender onSubmit={addNewMessageHandler}/>
          </div>
        </div>
              );
};

