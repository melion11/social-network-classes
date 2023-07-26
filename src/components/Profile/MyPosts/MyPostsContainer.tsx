import React, {ChangeEvent, useRef} from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, updatePostAC} from "../../../redux/profileReducer";



export type MyPostsPropsType = {
    store: any

}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    const state = props.store.getState()

    const addPostHandler = () => {
        props.store.dispatch(addPostAC())
    }

    const onChangePostText = (newPostElement:string) => {
        props.store.dispatch(updatePostAC(newPostElement))
    }

    return <MyPosts posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPostHandler}
                    onChangePostText={onChangePostText}
    />
}

