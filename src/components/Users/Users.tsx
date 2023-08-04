import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/redux-store";
import {NavLink} from "react-router-dom";


export type  UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setSelectedPage: (page: number) => void
    handlePageClick: (page: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    const pages = Array.from({length: pagesCount}, (_, i) => i + 1);
    const curP = props.currentPage;
    const curPF = Math.max(curP - 3, 0);
    const curPL = Math.min(curP + 3, pagesCount);
    let slicedPages: any[] = pages.slice(curPF, curPL);

    if (curPF > 0) {
        slicedPages = [1, "...", ...slicedPages];
    }

    if (curPL < pagesCount) {
        slicedPages = [...slicedPages, "...", pagesCount];
    }


    return (
        <div>
            <div>
                <div className={s["page-carousel"]}>
                    <div className={s["page-carousel__pages"]}>
                        {slicedPages.map((page) =>
                            page === "..." ? (
                                <span key={page}
                                      className={`${s["page-carousel__page"]} 
                                  ${s["page-carousel__page--disabled"]}`}>
                                 {page}
                            </span>
                            ) : (
                                <span key={page}
                                      className={`${s["page-carousel__page"]} 
                                  ${props.currentPage === page ? s["page-carousel__page--selected"] : ""}`}
                                      onClick={() => props.handlePageClick(page)}>
                                  {page}
                            </span>
                            )
                        )}
                    </div>
                </div>
            </div>

            {props.users.map(u => {
                const getFollowUserHandler = (userId: number) => {
                    props.follow(userId)
                }
                const getUnfollowUserHandler = (userId: number) => {
                    props.unfollow(userId)
                }

                return (
                    <div key={u.id} className={s["user-card"]}>
                        <div className={s["user-card__avatar"]}>
                            <NavLink to={`/profile/${u.id}`}><img
                                src={u.photos.small !== null ? u.photos.small : userPhoto} alt="Avatar"/></NavLink>
                        </div>
                        <div className={s["user-card__info-container"]}>
                            <div>
                                <div className={s["user-card__name"]}>{u.name}</div>
                                <div className={s["user-card__status"]}>{u.status}</div>
                                <div className={s["user-card__location"]}>
                                    <span className={s["user-card__country"]}>{"u.location.country"}</span>
                                    <span>{"u.location.city"}</span>
                                </div>
                            </div>
                            <div>
                                {u.followed
                                    ?
                                    <button disabled={props.followingInProgress.some(id => u.id === id)} onClick={() => {
                                        getUnfollowUserHandler(u.id)
                                    }}
                                            className={s["user-card__unfollow-btn"] + (props.followingInProgress ? ' disabled' : '')}>Unfollow
                                    </button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => u.id === id)} onClick={() => {
                                        getFollowUserHandler(u.id)
                                    }}
                                            className={s["user-card__follow-btn"] + (props.followingInProgress ? ' disabled' : '')}>Follow
                                    </button>
                                }
                            </div>
                        </div>
                    </div>

                );
            })}
        </div>
    );
}



