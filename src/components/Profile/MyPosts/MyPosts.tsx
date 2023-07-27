import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/redux-store";



export type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: ()=>void
    onChangePostText: (newPostElement:string)=>void

}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likeCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        props.addPost()
    }

    const onChangePostText = () => {
        if (newPostElement.current) props.onChangePostText(newPostElement.current.value)
    }

    return (

    <div className={s.postContainer}>
        <h3 className={s.postTitle}>My Posts</h3>
        <div className={s.postForm}>
            <label className={s.postLabel} htmlFor="postInput">New Post</label>
            <div className={s.postInputContainer}>
                <textarea className={s.postInput} id="postInput" value={props.newPostText} onChange={onChangePostText} ref={newPostElement} placeholder="Type your post here"></textarea>
                <div className={s.postInputControls}>
                    <span className={s.postInputLength} data-testid="postInputLength">{props.newPostText.length}</span>
                    <span className={s.postInputMaxLength} data-testid="postInputMaxLength">/ {100}</span>
                </div>
            </div>
            <button className={s.postButton} onClick={addPostHandler} disabled={props.newPostText.length === 0 || props.newPostText.length > 100}>Add Post</button>
        </div>
        <div className={s.postList}>
            {postsElements}
        </div>
    </div>
    )
}