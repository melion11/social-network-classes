import React, {ChangeEvent, createRef, useEffect, useRef, useState} from 'react';
import s from './ProfileStatus.module.css'


export type ProfileInfoPropsType = {
    userStatus: string
    updateStatus: (status: string) => void
    isOwner: boolean
}


export const ProfileStatus: React.FC<ProfileInfoPropsType> = (props) => {
    const {userStatus, updateStatus, isOwner} = props

   const [editMode, setEditMode] = useState(false)
   const [status, setStatus] = useState(userStatus)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        updateStatus(status)
        setEditMode(false)

    }

    useEffect(()=> {
        setStatus(userStatus)
    }, [userStatus])


   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const spanMode = <span className={s['status-span']} onDoubleClick={activateEditMode}>
            {userStatus || 'Click to add status'}
        </span>


    const inputMode = <input className={s['status-input']} autoFocus={true} value={status}
                             onChange={onChangeHandler} onBlur={deActivateEditMode}/>


        return (
            <div className={s['status-container']}>
                {isOwner && editMode ? inputMode : spanMode}
            </div>
        )

}