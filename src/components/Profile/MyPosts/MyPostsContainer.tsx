import React from 'react';
import {addPost,updatePost} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {StateType} from "../../../redux/redux-store";



const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}




export const MyPostsContainer = connect(mapStateToProps, {addPost,updatePost})(MyPosts)



