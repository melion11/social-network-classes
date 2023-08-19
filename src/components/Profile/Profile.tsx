import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileDescriptionDataFormType} from './ProfileInfo/ProfileDescriptionForm/ProfileDescriptionForm';
import {UserProfileType} from '../../redux/reducers/profileReducer';


export type ProfilePropsType = {
    userProfile: UserProfileType
    userStatus: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (photoFile: File) => void
    saveProfile: (newProfileData: ProfileDescriptionDataFormType)=> Promise<void | string>
}


export const Profile: React.FC<ProfilePropsType> = (props) => {
    const {userProfile, userStatus, updateStatus, isOwner, updatePhoto, saveProfile} = props


    return (
        <div className={s.content}>
            <ProfileInfo userProfile={userProfile} userStatus={userStatus}
                         updateStatus={updateStatus} isOwner={isOwner}
                            updatePhoto={updatePhoto} saveProfile={saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}
