import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.content__image}
                     src={'https://gamerwall.pro/uploads/posts/2022-08/1661206848_1-gamerwall-pro-p-peizazh-leto-oboi-1.jpg'}
                     alt={'image sea'}/>
            </div>
            <div>
                ava + desc
            </div>

        </div>
    )
}