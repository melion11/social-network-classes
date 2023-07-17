import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";



export type MyPostsPropsType = {
    posts: PostType[]
    addUserPost: (newPostText: string)=> void
}


export const MyPosts = (props: MyPostsPropsType) => {


    const postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likeCount}/>)

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        if (newPostElement.current !== null) {
           props.addUserPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }


    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div className={s.newPostWrap}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPostHandler}>Add post</button>
            </div>
                {postsElements}
        </div>
    )
}