import React from 'react';
import s from './Header.module.css'


export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__logo}
                 src="https://www.svgrepo.com/show/327388/logo-react.svg"
                 alt={'logo'}/>
        </header>
    )
}

