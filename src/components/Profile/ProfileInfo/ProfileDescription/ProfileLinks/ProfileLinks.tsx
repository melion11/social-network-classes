import React from 'react';
import s from './ProfileLinks.module.css'
import {UserProfileType} from '../../../../../redux/redux-store';



export type ProfileInfoPropsType = {
    userProfile: UserProfileType

}


export const ProfileLinks: React.FC<ProfileInfoPropsType> = (props) => {
    const {userProfile} = props

    return (
        <div className={s.profile__links}>
            <a className={s.profile__link} href={userProfile.contacts.vk} target="_blank"
               rel="noopener noreferrer">VK</a>
            <a className={s.profile__link} href={userProfile.contacts.instagram} target="_blank"
               rel="noopener noreferrer">Instagram</a>
            <a className={s.profile__link} href={userProfile.contacts.github} target="_blank"
               rel="noopener noreferrer">Github</a>
        </div>

    )
}