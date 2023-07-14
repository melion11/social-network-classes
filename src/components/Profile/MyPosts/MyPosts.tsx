import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.content}>
            My posts
            <div className={s.newPostWrap}>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <Post likeCount={15} message={'Hello, my name is Ilya'}/>
            <Post likeCount={20} message={'Im busy'}/>

        </div>
    )
}