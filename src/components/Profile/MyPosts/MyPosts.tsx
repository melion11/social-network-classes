import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostAC, PostType, UnionType, updatePostAC} from "../../../redux/state";



export type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: UnionType)=> void

}




export const MyPosts = (props: MyPostsPropsType) => {


    const postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likeCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current) props.dispatch(addPostAC())
    }

    const onChangePostText = () => {

        if (newPostElement.current) props.dispatch(updatePostAC(newPostElement.current.value))
    }

    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div className={s.newPostWrap}>
                <textarea value={props.newPostText} onChange={onChangePostText} ref={newPostElement}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
                {postsElements}
        </div>
    )
}