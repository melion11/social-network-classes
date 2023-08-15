import React from 'react';
import {connect} from "react-redux";
import {News} from "./News";
import {StateType} from "../../redux/redux-store";
import {withRedirect} from "../Login/withRedirect";
import {MusicConnect} from "../Music/MusicContainer";




const mapStateToProps = (state: StateType) => {
    return {

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}


export const NewsConnect = connect(mapStateToProps, mapDispatchToProps)(News)

export const NewsContainer = withRedirect(NewsConnect)


