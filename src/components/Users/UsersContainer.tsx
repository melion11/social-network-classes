import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType, UserType} from "../../redux/redux-store";
import {getFollowAC, getUnfollowAC, setUsersAC} from "../../redux/userReducer";


const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getFollowUser: (userId: number, followValue: boolean) => {
            dispatch(getFollowAC(userId, followValue))
        },
        getUnfollowUser: (userId: number, followValue: boolean) => {
            dispatch(getUnfollowAC(userId, followValue))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)