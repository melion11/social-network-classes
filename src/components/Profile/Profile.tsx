import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/redux-store";




export type ProfilePropsType = {
        userProfile: UserProfileType

}


export const Profile = (props: ProfilePropsType) => {





    return (
        <div className={s.content}>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer />
        </div>
    )
}