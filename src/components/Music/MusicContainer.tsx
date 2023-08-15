import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Music} from "./Music";
import {withRedirect} from "../Login/withRedirect";





const mapStateToProps = (state: StateType) => {
    return {

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}


export const MusicConnect = connect(mapStateToProps, mapDispatchToProps)(Music)

export const MusicContainer = withRedirect(MusicConnect)


