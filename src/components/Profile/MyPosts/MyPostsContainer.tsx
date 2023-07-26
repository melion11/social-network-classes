import React from 'react';
import {addPostAC, updatePostAC} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {StateType} from "../../../redux/redux-store";



const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: ()=>{
            dispatch(addPostAC())
        },
        onChangePostText: (newPostElement: string) => {
            dispatch(updatePostAC(newPostElement))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



