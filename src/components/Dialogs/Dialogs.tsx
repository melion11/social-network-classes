import React, {ChangeEvent, useRef} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialog/DialogItem";
import {DialogsPageType, newMessageAC, StoreType, UnionType, updateMessageAC} from "../../redux/state";

export type DialogsPropsType = {
    store: StoreType
    dispatch: (action: UnionType) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    const state = props.store.getState().dialogsPage

    const dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = state.messages.map(message => <Message id={message.id}
                                                                                message={message.message}/>)
    const newMessageText = state.newMessageText

    const newMessageHandler = () => props.dispatch(newMessageAC())

    const updateNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageAC(e.currentTarget.value))
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
                <textarea placeholder={'Type your new message'}
                          value={newMessageText}
                          onChange={updateNewMessageHandler}/>
                <button onClick={newMessageHandler}>Send</button>
            </div>
        </div>

    );
};

