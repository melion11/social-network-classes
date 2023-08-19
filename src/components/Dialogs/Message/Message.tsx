import React from 'react';
import s from './Message.module.css'

export type MessagePropsType = {
    id: number
    message: string
}

export const Message = (props: MessagePropsType) => {

    return (

        <div key={props.id} className={s.message}>
            <div className={s.sender}>
                <p>Me</p>
            </div>
            <div className={s.messageText}>
                <p>{props.message}</p>
            </div>
        </div>

    );


};


// <li className={s.messagesItem}>{props.message}</li>