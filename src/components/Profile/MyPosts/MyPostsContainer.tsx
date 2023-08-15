import React from 'react';
import {connect} from "react-redux";
import {PostType, StateType} from '../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {addPost} from '../../../redux/reducers/profileReducer';



type MapStateToProps = {
    posts: PostType[]

}

type MapDispatchToProps = {
    addPost: (newPostText: string)=>void
}

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
    }
}




export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)



