import React from 'react';
import s from './ProfileDescription.module.css'
import {ProfileContacts} from './ProfileContacts/ProfileContacts';
import {UserProfileType} from '../../../../redux/reducers/profileReducer';


export type ProfileInfoPropsType = {
    userProfile: UserProfileType
    isOwner: boolean
    goToEditMode: ()=> void
}


export const ProfileDescription: React.FC<ProfileInfoPropsType> = (props) => {
    const {userProfile, isOwner, goToEditMode} = props

    return (
        <div className={s.profile__description}>
            {isOwner && <div><button className={s.profile__edit} onClick={goToEditMode}>Edit</button></div>}
            <div className={s.profile__item}>

                <h2 className={s.profile__name}>{userProfile.fullName}</h2>
                <span className={s.profile__label}>About me:</span>
                <span className={s.profile__text}>{userProfile.aboutMe}</span>
            </div>
            <div className={s.profile__item}>
                <span className={s.profile__label}>Looking for a job:</span>
                <span className={s.profile__text}>{userProfile.lookingForAJob ? '💼' : '😀'}</span>
            </div>
            <div className={s.profile__item}>
                <div className={s.profile__label}>My professional skills:</div>
                <div className={s.profile__text}>
                    <p>{userProfile.lookingForAJobDescription}</p>
                </div>
            </div>
            <div className={s.profile__contacts}>
                <div className={s.profile__label}>Contacts:</div>
                {Object.keys(userProfile.contacts).map((key: string) => {
                        return <ProfileContacts key={key} title={key} value={userProfile.contacts[key]}/>
                    })}
            </div>
        </div>

    )
}