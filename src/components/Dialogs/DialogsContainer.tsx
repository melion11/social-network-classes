import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogType, MessageType, StateType} from '../../redux/redux-store';
import {withRedirect} from "../../hoc/withRedirect";
import {compose} from "redux";
import {newMessage} from '../../redux/reducers/dialogsReducer';
import exp from 'constants';


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




const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, {newMessage}),
    withRedirect)(Dialogs)

export default DialogsContainer



