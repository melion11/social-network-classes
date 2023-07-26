import React, {ChangeEvent} from 'react';
import s from './MessageSender.module.css'

export type MessageSenderPropsType = {
    newMessageText: string
    getNewMessage: ()=>void
    updateNewMessage: (text: string)=>void
}


export const MessageSender = (props: MessageSenderPropsType) => {

    const newMessageHandler = () => props.getNewMessage()

    const updateNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.updateNewMessage(e.currentTarget.value)
    }


    return (
        <div className={s.sendForm}>
           <textarea  className={s.textarea} placeholder={'Type your new message'}
                value={props.newMessageText}
                onChange={updateNewMessageHandler}/>
           <button className={s.button} onClick={newMessageHandler}>Send</button>
        </div>
    );
};

