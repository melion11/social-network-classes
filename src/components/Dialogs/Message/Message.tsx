import React from 'react';
import s from './Message.module.css'

export type MessagePropsType = {
    id: number
    message: string
}

export const Message = (props: MessagePropsType) => {

    return <li className={s.messagesItem}>{props.message}</li>
};

