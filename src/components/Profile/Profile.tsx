import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/redux-store";




export type ProfilePropsType = {
        userProfile: UserProfileType
        userStatus: string
        updateStatus: (status: string) => void
}


export const Profile: React.FC<ProfilePropsType> = (props ) => {
        const {userProfile, userStatus, updateStatus} = props




    return (
        <div className={s.content}>
            <ProfileInfo userProfile={userProfile} userStatus={userStatus} updateStatus={updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}
