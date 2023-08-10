import React from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/redux-store";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";


export type ProfileInfoPropsType = {
    userProfile: UserProfileType
}



export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    const {userProfile} = props

    return (
        <div className={s.profile} style={{
            backgroundImage: `url('https://avatars.mds.yandex.net/i?id=4656e8abe71d7f4be5101991ec115bbc-4211711-images-thumbs&n=13')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className={s.profile__overlay}></div>
            <div className={s.profile__content}>
                <div className={s.profile__header}>
                    <img className={s.profile__avatar} src={userProfile.photos.small ? userProfile.photos.small : 'https://placehold.co/50x50?text=No+Avatar'} alt={"avatar"} />
                    <h2 className={s.profile__name}>{userProfile.fullName}</h2>
                    {/*<p className={s.profile__status}>{userProfile.aboutMe}</p>*/}
                    <ProfileStatus status={userProfile.aboutMe}/>
                </div>
                <div className={s.profile__description}>
                    <div className={s.profile__item}>
                        <span className={s.profile__label}>Looking for a job:</span>
                        <span className={s.profile__text}>{userProfile.lookingForAJob ? '💼' : '😀'}</span>
                    </div>
                    <div className={s.profile__item}>
                        <div className={s.profile__label}>Looking for a job description:</div>
                        <div className={s.profile__text}>
                            <p>{userProfile.lookingForAJobDescription}</p>
                        </div>
                    </div>
                    <div className={s.profile__item}>
                        <span className={s.profile__label}>Contacts:</span>
                        <div className={s.profile__links}>
                            <a className={s.profile__link} href={userProfile.contacts.vk} target="_blank" rel="noopener noreferrer">VK</a>
                            <a className={s.profile__link} href={userProfile.contacts.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a className={s.profile__link} href={userProfile.contacts.github} target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}