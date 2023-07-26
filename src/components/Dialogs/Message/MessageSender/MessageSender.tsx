import React, {ChangeEvent} from 'react';
import {newMessageAC, updateMessageAC} from "../../../../redux/dialogsReducer";
import {DialogsPageType, StoreType, UnionType} from "../../../../redux/store";
import s from './MessageSender.module.css'

export type MessageSenderPropsType = {
    state: DialogsPageType
    dispatch: (action: UnionType) => void
}


export const MessageSender = (props: MessageSenderPropsType) => {

    const newMessageText = props.state.newMessageText

    const newMessageHandler = () => props.dispatch(newMessageAC())

    const updateNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageAC(e.currentTarget.value))
    }


    return (
        <div className={s.sendForm}>
           <textarea  className={s.textarea} placeholder={'Type your new message'}
                value={newMessageText}
                onChange={updateNewMessageHandler}/>
           <button className={s.button} onClick={newMessageHandler}>Send</button>
        </div>
    );
};

