import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={s.dialogsWrapperContent}>
        <div className={s.dialogWrapper}>
            <ul className={s.dialogList}>
                <NavLink to={'/dialogs/1'}><li className={s.dialogItem}>Pavel</li></NavLink>
                <NavLink to={'/dialogs/2'}><li className={s.dialogItem}>Sasha</li></NavLink>
                <NavLink to={'/dialogs/3'}><li className={s.dialogItem}>Vlad</li></NavLink>
                <NavLink to={'/dialogs/4'}> <li className={s.dialogItem}>Nastya</li></NavLink>
                <NavLink to={'/dialogs/5'}><li className={s.dialogItem}>Dima</li></NavLink>
            </ul>
        </div>

        <div className={s.messagesWrapper}>
            <ul className={s.messagesList}>
                <li className={s.messagesItem}>Hello, how are you?</li>
                <li className={s.messagesItem}>Im fine, thx</li>
                <li className={s.messagesItem}>Okay</li>
        </ul>
    </div>
        </div>
    );
};

