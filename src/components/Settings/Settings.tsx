import React from 'react';
import {Redirect} from "react-router-dom";
import s from '../Settings/Settings.module.css';
import Lottie from "lottie-react";
import Typed from 'react-typed';
import workInProgressAnim from '../../assets/workInProgressAnim.json'

export type SettingsPropsType = {
    isAuth: boolean
}

export const Settings = (props: SettingsPropsType) => {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <div className={s.imgContainer}>
                <Lottie animationData={workInProgressAnim} style={{width: 500, height: 500}} loop={true} />
                <Typed className={s.text} loop={true}  backSpeed={100} strings={['Coming Soon']} typeSpeed={100}/>
            </div>
        </div>
    );
};

