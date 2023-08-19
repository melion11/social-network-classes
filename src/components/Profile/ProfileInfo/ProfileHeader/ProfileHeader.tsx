import React, {ChangeEvent} from 'react';
import s from './ProfileHeader.module.css'
import {ProfileStatus} from '../../ProfileStatus/ProfileStatus';
import {UserProfileType} from '../../../../redux/reducers/profileReducer';



export type ProfileHeaderPropsType = {
    userProfile: UserProfileType
    userStatus: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (photoFile: File) => void
}


export const ProfileHeader: React.FC<ProfileHeaderPropsType> = (props) => {
    const {userProfile, userStatus, updateStatus, isOwner, updatePhoto} = props


    const onChangePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            updatePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.profile__header}>
            <div className={s.imageContainer}>
                <img className={s.profile__avatar}
                    src={userProfile.photos.large || 'https://placehold.co/50x50?text=No+Avatar'}
                    alt="avatar"
                />
                {isOwner && <input onChange={onChangePhotoHandler} type="file" />}
            </div>
            <ProfileStatus
                userStatus={userStatus}
                updateStatus={updateStatus}
                isOwner={isOwner}
            />
        </div>

    )
}