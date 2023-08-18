import React from 'react';
import s from './Header.module.css'
import {NavLink, Redirect} from 'react-router-dom';
import {AuthType} from "../../redux/redux-store";


export type HeaderPropsType = {
    userData: AuthType
    getLogOut: ()=> void
}


export const Header = (props: HeaderPropsType) => {


    const logout = ()=>{
        props.getLogOut()
        return <Redirect to={'/login'}/>
    }


    return (
        <header className={s.header}>
            <img className={s.header__logo}
                 src="https://www.svgrepo.com/show/327388/logo-react.svg"
                 alt={'logo'}/>
            {props.userData.isAuth ?
                <NavLink to={'/login'} className={s.logout} onClick={logout}>Log Out</NavLink> :
                <NavLink to={'/login'} className={s.logout}>Log In</NavLink>
            }


        </header>
    )
}

