import React from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/redux-store";
import {ProfileHeader} from './ProfileHeader/ProfileHeader';
import {ProfileDescription} from './ProfileDescription/ProfileDescription';


export type ProfileInfoPropsType = {
    userProfile: UserProfileType
    userStatus: string
    updateStatus: (status: string) => void
}



export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    const {userProfile, userStatus, updateStatus} = props

    return (
        <div className={s.profile}>
            <div className={s.profile__overlay}></div>
            <div className={s.profile__content}>
              <ProfileHeader userProfile={userProfile} userStatus={userStatus} updateStatus={updateStatus}/>
               <ProfileDescription userProfile={userProfile} />
            </div>
        </div>
    )
}