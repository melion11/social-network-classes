import React from 'react';
import {Redirect} from "react-router-dom";


export type SettingsPropsType = {
    isAuth: boolean
}

export const Music = (props: SettingsPropsType) => {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
           Music
        </div>
    );
};

