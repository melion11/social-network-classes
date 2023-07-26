import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";




const mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)




