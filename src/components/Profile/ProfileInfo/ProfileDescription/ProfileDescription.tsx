import React from 'react';
import s from './ProfileDescription.module.css'
import {UserProfileType} from '../../../../redux/redux-store';
import {ProfileLinks} from './ProfileLinks/ProfileLinks';


export type ProfileInfoPropsType = {
    userProfile: UserProfileType

}


export const ProfileDescription: React.FC<ProfileInfoPropsType> = (props) => {
    const {userProfile} = props

    return (
        <div className={s.profile__description}>
            <div className={s.profile__item}>
                <span className={s.profile__label}>Looking for a job:</span>
                <span className={s.profile__text}>{userProfile.lookingForAJob ? '💼' : '😀'}</span>
            </div>
            <div className={s.profile__item}>
                <div className={s.profile__label}>Looking for a job description:</div>
                <div className={s.profile__text}>
                    <p>{userProfile.lookingForAJobDescription}</p>
                </div>
            </div>
            <div className={s.profile__item}>
                <span className={s.profile__label}>Contacts:</span>
                <ProfileLinks userProfile={userProfile}/>
            </div>
        </div>

    )
}