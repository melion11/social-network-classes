import React from 'react';
import {connect} from "react-redux";
import {StateType, UserType} from "../../redux/redux-store";
import {
    getFollowAC,
    getUnfollowAC,
    setSelectedPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC
} from "../../redux/userReducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from '../../assets/images/loading.svg'
import s from './Users.module.css'
import {Dispatch} from "redux";
import {Preloader} from "../UI/Preloader/Preloader";

export type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

export type MapDispatchToPropsType = {
    getFollowUser: (userId: number, followValue: boolean) => void
    getUnfollowUser: (userId: number, followValue: boolean) => void
    setUsers: (users: UserType[]) => void
    setSelectedPage: (page: number) => void
    setTotalUsersCount: (totalUserCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

const mapDispatchToProps = (dispatch: Dispatch) => {
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }

}


class UsersClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }

    handlePageClick = (page: number) => {
        this.props.setSelectedPage(page);
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    };


    render() {
        return (
        <div>
            { this.props.isFetching ? <Preloader /> :
        <Users
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
        </div>
        )
    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)