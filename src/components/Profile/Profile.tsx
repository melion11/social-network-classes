import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, StoreType, UnionType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



export type ProfilePropsType = {
    store: StoreType
    // profilePage: ProfilePageType
    // dispatch: (action: UnionType)=> void
}


export const Profile = (props: ProfilePropsType) => {



    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}