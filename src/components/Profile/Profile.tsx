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


export const Profile = (props: ProfilePropsType) => {





    return (
        <div className={s.content}>
            <ProfileInfo userProfile={props.userProfile} userStatus={props.userStatus} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}
