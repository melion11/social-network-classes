import React from 'react';
import {connect} from 'react-redux';
import {StateType, UserType} from '../../redux/redux-store';
import {follow, getRequestUsers, setSelectedPage, unfollow} from '../../redux/reducers/userReducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withRedirect} from '../../hoc/withRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUserCount,
    getUsers
} from '../../redux/selectors/userSelectors';

export class UsersClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    handlePageClick = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
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
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
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
}

const mapStateToProps = (state: StateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: state.appPage.isFetching,
        followingInProgress: getFollowingInProgress(state),

    }
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {follow,unfollow,getUsers: getRequestUsers}), withRedirect)(UsersClass)

export default UsersContainer

















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