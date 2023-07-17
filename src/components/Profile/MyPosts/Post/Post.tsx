import React from 'react';
import s from './Post.module.css'

export type PostPropsType = {
    id: number
    message: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {

        return (
            <div className={s.content}>
                <div className={s.postWrap}>
                    <img className={s.avatarImage} loading="lazy"
                         src={'https://w7.pngwing.com/pngs/366/190/png-transparent-pittman-animal-hospital-user-computer-icons-avatar-avatar.png'}
                         alt={'avatar'}/>
                    <p>{props.message}</p>
                </div>
                <div className={s.likeWrap}>
                    <span>like: {props.likeCount}</span>
                </div>
            </div>
        );
    }
