import React from 'react';
import {UserType} from "../../redux/redux-store";
import s from './Users.module.css';

export type UsersPropsType = {
    users: UserType[]
    getFollowUser: (userId: number, followValue: boolean) => void
    getUnfollowUser: (userId: number, followValue: boolean) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {


    if (props.users.length === 0) {
        props.setUsers([
            {
                userId: 1,
                userAvatar: 'https://avatars.mds.yandex.net/i?id=d84005a698e9f3146a2331196a7ff9886a131b5e-4834925-images-thumbs&n=13',
                fullName: 'Ilya',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                },
                userStatus: 'Okay',
                follow: true
            },
            {
                userId: 2,
                userAvatar: 'https://avatars.mds.yandex.net/i?id=d84005a698e9f3146a2331196a7ff9886a131b5e-4834925-images-thumbs&n=13',
                fullName: 'Dmitry',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                },
                userStatus: 'fucku',
                follow: false
            },
            {
                userId: 3,
                userAvatar: 'https://avatars.mds.yandex.net/i?id=d84005a698e9f3146a2331196a7ff9886a131b5e-4834925-images-thumbs&n=13',
                fullName: 'Andrew',
                location: {
                    country: 'USA',
                    city: 'Chicago'
                },
                userStatus: 'Close u',
                follow: true
            },
            {
                userId: 4,
                userAvatar: 'https://avatars.mds.yandex.net/i?id=d84005a698e9f3146a2331196a7ff9886a131b5e-4834925-images-thumbs&n=13',
                fullName: 'Kristina',
                location: {
                    country: 'Ukraine',
                    city: 'Kiev'
                },
                userStatus: 'Show me',
                follow: false
            }
        ])
    }


    return (
        <div>
            {props.users.map(u => {

                const getFollowUserHandler = (userId: number, followValue: boolean) => {
                    props.getFollowUser(userId, followValue)
                }

                const getUnfollowUserHandler = (userId: number, followValue: boolean) => {
                    props.getUnfollowUser(userId, followValue)
                }

                return (
                    <div className={s["user-card"]}>
                        <div className={s["user-card__avatar"]}>
                            <img src={u.userAvatar} alt="Avatar"/>
                        </div>
                        <div className={s["user-card__info-container"]}>
                            <div>
                                <div className={s["user-card__name"]}>{u.fullName}</div>
                                <div className={s["user-card__status"]}>{u.userStatus}</div>
                                <div className={s["user-card__location"]}>
                                    <span className={s["user-card__country"]}>{u.location.country}</span>
                                    <span>{u.location.city}</span>
                                </div>
                            </div>
                            <div>
                                {u.follow ?
                                    <button onClick={() => {
                                        getFollowUserHandler(u.userId, !u.follow)
                                    }} className={s["user-card__follow-btn"]}>Follow</button> :
                                    <button onClick={() => {
                                        getUnfollowUserHandler(u.userId, !u.follow)
                                    }} className={s["user-card__unfollow-btn"]}>Unfollow</button>
                                }
                            </div>
                        </div>
                    </div>

                );
            })}
        </div>
    );
};

