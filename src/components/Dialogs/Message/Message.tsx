import React from 'react';
import s from './Message.module.css'

export type MessagePropsType = {
    id: number
    message: string
}

export const Message = (props: MessagePropsType) => {

    return (

        <div key={props.id} className={s.text}>
            <div className={s.name}>
                <p>Me</p>
            </div>
            <pre className={s.messageText}>
                 <p>{props.message}</p>
            </pre>
        </div>

    );


};


// <li className={s.messagesItem}>{props.message}</li>