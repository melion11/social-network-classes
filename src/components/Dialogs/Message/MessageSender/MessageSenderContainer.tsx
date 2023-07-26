import React from 'react';
import {newMessageAC, updateMessageAC} from "../../../../redux/dialogsReducer";
import {MessageSender} from "./MessageSender";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";




const mapStateToProps = (state: StateType) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getNewMessage: ()=>{
            dispatch(newMessageAC())
        },
        updateNewMessage: (text: string)=> {
            dispatch(updateMessageAC(text))
        }
    }
}

export const MessageSenderContainer = connect(mapStateToProps, mapDispatchToProps)(MessageSender)




