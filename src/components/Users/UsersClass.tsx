import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import axios from "axios";
import {UserType} from "../../redux/redux-store";

export type  UserProps = {
    users: UserType[]
    getFollowUser: (userId: number, followValue: boolean) => void
    getUnfollowUser: (userId: number, followValue: boolean) => void
    setSelectedPage: (page: number) => void
    setUsers: (users: UserType[]) => void
    setTotalUsersCount: (totalUserCount: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
}

class UserClass extends React.Component<UserProps> {
    // constructor(props: UserProps) {
    //     super(props);
    //
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }


    render() {

        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
        const curP = this.props.currentPage;
        const curPF = Math.max(curP - 3, 0);
        const curPL = Math.min(curP + 3, pagesCount);
        let slicedPages: any[] = pages.slice(curPF, curPL);

        if (curPF > 0) {
            slicedPages = [1, "...", ...slicedPages];
        }

        if (curPL < pagesCount) {
            slicedPages = [...slicedPages, "...", pagesCount];
        }

        const handlePageClick = (page: number) => {
            this.props.setSelectedPage(page);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.setUsers(response.data.items);
                });
        };

        return (
            <div>

                <div>
                    <div className={s["page-carousel"]}>
                        <div className={s["page-carousel__pages"]}>
                            {slicedPages.map((page) =>
                                    page === "..." ? (
                                        <span key={page} className={`${s["page-carousel__page"]} ${s["page-carousel__page--disabled"]}`}>
                                             {page}
                                         </span>
                                    ) : (
                                        <span
                                            key={page}
                                            className={`${s["page-carousel__page"]} ${this.props.currentPage === page ? s["page-carousel__page--selected"] : ""}`}
                                            onClick={() => handlePageClick(page)}
                                        >
                                            {page}
                                        </span>
                                    )
                            )}
                        </div>
                    </div>
                </div>

                {this.props.users.map(u => {

                    const getFollowUserHandler = (userId: number, followValue: boolean) => {
                        this.props.getFollowUser(userId, followValue)
                    }

                    const getUnfollowUserHandler = (userId: number, followValue: boolean) => {
                        this.props.getUnfollowUser(userId, followValue)
                    }

                    return (
                        <div className={s["user-card"]}>
                            <div className={s["user-card__avatar"]}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="Avatar"/>
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
                                    {u.followed ?
                                        <button onClick={() => {
                                            getFollowUserHandler(u.id, !u.followed)
                                        }} className={s["user-card__follow-btn"]}>Follow</button> :
                                        <button onClick={() => {
                                            getUnfollowUserHandler(u.id, !u.followed)
                                        }} className={s["user-card__unfollow-btn"]}>Unfollow</button>
                                    }
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>
        );
    }

}

export default UserClass;