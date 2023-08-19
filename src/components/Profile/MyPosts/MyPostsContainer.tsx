import React from 'react';
import {connect} from "react-redux";
import {MyPosts} from './MyPosts';
import {addPost, PostType} from '../../../redux/reducers/profileReducer';
import {StateType} from '../../../redux/redux-store';



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



