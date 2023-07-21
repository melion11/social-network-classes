import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, UnionType} from "../../redux/state";



export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: UnionType)=> void
}


export const Profile = (props: ProfilePropsType) => {



    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts newPostText={props.profilePage.newPostText} posts={props.profilePage.posts}  dispatch={props.dispatch}/>
        </div>
    )
}