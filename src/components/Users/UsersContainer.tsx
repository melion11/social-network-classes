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
import axios from "axios";
import {Users} from "./Users";



export type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

export type MapDispatchToPropsType = {
    getFollowUser: (userId: number, followValue: boolean) => void
    getUnfollowUser: (userId: number, followValue: boolean) => void
    setUsers: (users: UserType[]) => void
    setSelectedPage: (page: number) => void
    setTotalUsersCount: (totalUserCount: number) => void
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


class UsersClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        alert('hello')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }

    handlePageClick = (page: number) => {
        this.props.setSelectedPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };


    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUserCount={this.props.totalUserCount}
            currentPage={this.props.currentPage}
            getFollowUser={this.props.getFollowUser}
            getUnfollowUser={this.props.getUnfollowUser}
            setUsers={this.props.setUsers}
            setSelectedPage={this.props.setSelectedPage}
            handlePageClick={this.handlePageClick}

        />
    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)