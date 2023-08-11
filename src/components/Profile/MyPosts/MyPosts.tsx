import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/redux-store";
import AddPostForm, {InputDataType} from './AddMessageForm/AddPostForm';






export type MyPostsPropsType = {
    posts: PostType[]
    addPost: (newMessageBody: string)=>void
}

export const MyPosts : React.FC<MyPostsPropsType>= (props) => {
   const {posts, addPost} = props

    const postsElements = posts.map(post => <Post key={post.id} id={post.id} message={post.message} likeCount={post.likeCount}/>)


    const addNewPostHandler = (values: InputDataType) => {
        addPost(values.newMessageBody)
    }


    return (

    <div className={s.postContainer}>
           <AddPostForm onSubmit={addNewPostHandler}/>
        <div className={s.postList}>
            {postsElements}
        </div>
    </div>
    )
}



