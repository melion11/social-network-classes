import React from 'react';
import {connect} from "react-redux";
import {StateType, UserType} from "../../redux/redux-store";
import {
    getFollowAC,
    getUnfollowAC,
    setSelectedPageAC,
    setTotalUsersCountAC,
    setUsersAC
} from "../../redux/userReducer";
import UserClass from "./UsersClass";


const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
        },
        setSelectedPage: (page: number) => {
            dispatch(setSelectedPageAC(page))
        },
        setTotalUsersCount: (totalUserCount: number) => {
            dispatch(setTotalUsersCountAC(totalUserCount))
        }
    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)