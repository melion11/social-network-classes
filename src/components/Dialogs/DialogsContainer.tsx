import React, {ChangeEvent, useRef} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialog/DialogItem";
import {StoreType, UnionType} from "../../redux/store";
import {MessageSender} from "./Message/MessageSender/MessageSender";
import {Dialogs} from "./Dialogs";

export type DialogsPropsType = {
    store: any
}


export const DialogsContainer = (props: DialogsPropsType) => {

    const state = props.store.getState().dialogsPage


    return <Dialogs store={props.store} dialogs={state.dialogs} messages={state.messages}/>
};

