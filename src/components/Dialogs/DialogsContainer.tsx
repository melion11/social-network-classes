import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {withRedirect} from "../Login/withRedirect";
import {compose} from "redux";





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


export const DialogsContainer = compose(withRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)



