import React from 'react';
import s from '../Users.module.css';
import userPhoto from './../../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {UserProfilePhotosType} from '../../../redux/redux-store';



export type  UsersPropsType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: UserProfilePhotosType
    getUnfollowUserHandler: (userId: number) => void
    getFollowUserHandler: (userId: number) => void
    followingInProgress: number[]
}

export const User: React.FC<UsersPropsType> = (props) => {
    const {id, followed, followingInProgress, getUnfollowUserHandler,
        getFollowUserHandler, name, status, photos} = props


    return (
            <div key={id} className={s['user-card']}>
                <div className={s['user-card__avatar']}>
                    <NavLink to={`/profile/${id}`}>
                        <img src={photos.small !== null ? photos.small : userPhoto} alt="Avatar"/>
                    </NavLink>
                </div>
                <div className={s['user-card__info-container']}>
                    <div>
                        <div className={s['user-card__name']}>{name}</div>
                        <div className={s['user-card__status']}>{status}</div>
                    </div>
                    <div>
                        {followed ?
                            <button disabled={followingInProgress.some(id => id === id)}
                                    onClick={() => {getUnfollowUserHandler(id)}}
                                    className={s['user-card__unfollow-btn'] + (followingInProgress ? ' disabled' : '')}>
                                Unfollow
                            </button> :
                            <button disabled={followingInProgress.some(id => id === id)}
                                    onClick={() => {getFollowUserHandler(id)}}
                                    className={s['user-card__follow-btn'] + (followingInProgress ? ' disabled' : '')}>
                                Follow
                            </button>
                        }
                    </div>
                </div>
            </div>
    );
}



