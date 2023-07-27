import React from 'react';
import s from './Post.module.css'

export type PostPropsType = {
    id: number
    message: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {

        return (
            <div className={s.post}>
                <div className={s.postWrap}>
                    <img className={s.avatarImage} loading="lazy"
                         src={'https://avatars.mds.yandex.net/i?id=9690567e5e6fb690dc43597b14148235a9c6a99e-9167398-images-thumbs&n=13'}
                         alt={'avatar'}/>
                    <p>{props.message}</p>
                </div>
                <div className={s.likeWrap}>
                    <span className={s.likeIcon}></span>
                    <span className={s.likeCount}>like: {props.likeCount}</span>
                </div>
            </div>
        );
    }
