import React from 'react';
import {connect} from "react-redux";
import {StateType, UserType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    setSelectedPage,
    unfollow
} from "../../redux/userReducer";
import {Users} from "./Users";
import {Preloader} from "../UI/Preloader/Preloader";
import {Redirect} from "react-router-dom";


class UsersClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    handlePageClick = (page: number) => {
        this.props.setSelectedPage(page);
        this.props.getUsers(page, this.props.pageSize)
    };


    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                {this.props.isFetching ? <Preloader/> :
                    <Users
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalUserCount={this.props.totalUserCount}
                        currentPage={this.props.currentPage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        setSelectedPage={this.props.setSelectedPage}
                        handlePageClick={this.handlePageClick}
                        followingInProgress={this.props.followingInProgress}
                    />
                }
            </div>
        )
    }

}


export type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    isAuth: boolean
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth

    }
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setSelectedPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         getFollowUser: (userId: number, followValue: boolean) => {
//             dispatch(getFollowAC(userId, followValue))
//         },
//         getUnfollowUser: (userId: number, followValue: boolean) => {
//             dispatch(getUnfollowAC(userId, followValue))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setSelectedPage: (page: number) => {
//             dispatch(setSelectedPageAC(page))
//         },
//         setTotalUsersCount: (totalUserCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUserCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
//
// }


export const UsersContainer = connect(mapStateToProps, {
        follow,
        unfollow,
        setSelectedPage,
        getUsers
    }
)
(UsersClass)