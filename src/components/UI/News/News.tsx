import React from 'react';
import s from '/Dialogs.module.css'
import {Redirect} from "react-router-dom";


export type NewsPropsType = {
    isAuth: boolean
}


export const News = (props: NewsPropsType) => {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            News
        </div>
    );
};

