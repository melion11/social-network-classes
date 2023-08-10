import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Settings} from "./Settings";
import {withRedirect} from "../../Login/withRedirect";





const mapStateToProps = (state: StateType) => {
    return {

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}


export const SettingsConnect = connect(mapStateToProps, mapDispatchToProps)(Settings)

export const SettingsContainer = withRedirect(SettingsConnect)


