import React from 'react';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User/User';
import {UserType} from '../../redux/reducers/userReducer';
import s from './Users.module.css';

export type  UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    handlePageClick: (page: number) => void
    followingInProgress: number[]
}

export const Users: React.FC<UsersPropsType> = (props) => {
    const {currentPage,pageSize,handlePageClick,
        totalUserCount,users,followingInProgress,follow,unfollow} = props


    return (
        <div>
            <Paginator pageSize={pageSize} totalUserCount={totalUserCount} currentPage={currentPage} handlePageClick={handlePageClick}/>

            <div className={s.usersContainer}>
            {users.map(u => {
                const getFollowUserHandler = (userId: number) => {
                    follow(userId)
                }
                const getUnfollowUserHandler = (userId: number) => {
                    unfollow(userId)
                }

                return (
                  <User key={u.id} followingInProgress={followingInProgress} getFollowUserHandler={getFollowUserHandler}
                  getUnfollowUserHandler={getUnfollowUserHandler} id={u.id} name={u.name} photos={u.photos} status={u.status}
                        followed={u.followed}
                  />
                );
            })}
            </div>
        </div>
    );
}



