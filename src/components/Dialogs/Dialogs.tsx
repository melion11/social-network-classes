import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialog/DialogItem";
import {DialogsPageType} from "../../redux/state";

export type DialogsPropsType = {
    state: DialogsPageType
}


export const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.state.messages.map(message => <Message id={message.id} message={message.message}/>)


    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const newMessageHandler = () => {
        if (newMessageElement.current !== null) {
            alert(newMessageElement.current.value)
        }
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
                <textarea ref={newMessageElement}></textarea>
                <button onClick={newMessageHandler}>+</button>
            </div>
        </div>

            );
};

