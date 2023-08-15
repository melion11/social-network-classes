import React from 'react';
import s from './ProfileHeader.module.css'
import {ProfileStatus} from '../../ProfileStatus/ProfileStatus';
import {UserProfileType} from '../../../../redux/redux-store';




export type ProfileHeaderPropsType = {
    userProfile: UserProfileType
    userStatus: string
    updateStatus: (status: string) => void
}



export const ProfileHeader: React.FC<ProfileHeaderPropsType> = (props) => {
    const {userProfile, userStatus , updateStatus} = props

    return (
                <div className={s.profile__header}>
                    <img className={s.profile__avatar} src={userProfile.photos.small ? userProfile.photos.small : 'https://placehold.co/50x50?text=No+Avatar'} alt={"avatar"} />
                    <h2 className={s.profile__name}>{userProfile.fullName}</h2>
                    <ProfileStatus userStatus={userStatus} updateStatus={updateStatus}/>
                    <p className={s.profile__status}>{userProfile.aboutMe}</p>
              </div>

    )
}