import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthType} from "../../../redux/redux-store";


export type HeaderPropsType = {
    userData: AuthType
}


export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img className={s.header__logo}
                 src="https://www.svgrepo.com/show/327388/logo-react.svg"
                 alt={'logo'}/>
            <div className={s.user}>
                {
                    props.userData.isAuth
                        ?
                        <>
                            <img src={'https://www.svgrepo.com/show/327388/logo-react.svg'} alt={'user.login'} className={s.avatar}/>
                            <span className={s.login}>{props.userData.login}</span>
                        </>
                        :
                        <NavLink className={s.login} to={'/login'}>Login</NavLink>
                }
            </div>
            <button className={s.logout} onClick={() => {
            }}>Выход
            </button>
        </header>
    )
}

