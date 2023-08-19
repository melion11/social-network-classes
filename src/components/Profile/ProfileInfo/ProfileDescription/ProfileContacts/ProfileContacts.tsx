import React from 'react';
import s from './ProfileContacts.module.css'




export type ProfileInfoPropsType = {
    title: string
    [key: string]: string

}


export const ProfileContacts: React.FC<ProfileInfoPropsType> = (props) => {
    const {title, value} = props

    return (
        <div className={s.profile__links}>
            <a className={s.profile__link} href={value} target="_blank"
               rel="noopener noreferrer">{title}</a>
        </div>

    )
}