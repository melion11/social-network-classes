import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogType, MessageType, StateType} from '../../redux/redux-store';
import {withRedirect} from "../Login/withRedirect";
import {compose} from "redux";
import {newMessage} from '../../redux/reducers/dialogsReducer';


type MapStateToProps = {
    dialogs: DialogType[]
    messages: MessageType[]
}

type MapDispatchToProps = {
    newMessage: (newMessageBody: string)=>void
}


const mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}




export const DialogsContainer = compose(withRedirect, connect(mapStateToProps, {newMessage}))(Dialogs)



