import React from 'react';
import {Redirect} from "react-router-dom";
import s from '../News/News.module.css';
import Lottie from "lottie-react";
import workInProgressAnim from '../../assets/workInProgressAnim.json'
import Typed from 'react-typed';

export type NewsPropsType = {
    isAuth: boolean
}


export const News = (props: NewsPropsType) => {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <div className={s.imgContainer}>
                <Lottie animationData={workInProgressAnim} style={{width: 500, height: 500}} loop={true} />
                <Typed className={s.text} loop={true} backSpeed={100}  strings={['Coming Soon']} typeSpeed={100}/>
            </div>
        </div>
    );
};

