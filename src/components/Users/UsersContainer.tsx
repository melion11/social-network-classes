import React from 'react';
import {connect} from "react-redux";
import {StateType, UserType} from "../../redux/redux-store";
import {
    getFollow, getUnfollow, setSelectedPage,
    setTotalUsersCount, setUsers, toggleIsFetching, toggleIsFollow
} from "../../redux/userReducer";
import {Users} from "./Users";
import {Preloader} from "../UI/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })

    }

    handlePageClick = (page: number) => {
        this.props.setSelectedPage(page);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
        });
    };


    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> :
                    <Users
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalUserCount={this.props.totalUserCount}
                        currentPage={this.props.currentPage}
                        getFollow={this.props.getFollow}
                        getUnfollow={this.props.getUnfollow}
                        setUsers={this.props.setUsers}
                        setSelectedPage={this.props.setSelectedPage}
                        handlePageClick={this.handlePageClick}
                        toggleIsFollow={this.props.toggleIsFollow}
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
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

export type MapDispatchToPropsType = {
    getFollow: (userId: number, followValue: boolean) => void
    getUnfollow: (userId: number, followValue: boolean) => void
    setUsers: (users: UserType[]) => void
    setSelectedPage: (page: number) => void
    setTotalUsersCount: (totalUserCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollow: (userId: number, isFollow: boolean) => void
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


export const UsersContainer = connect(mapStateToProps,
    {
        getFollow,
        getUnfollow,
        setUsers,
        setSelectedPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFollow
    }
)
(UsersClass)