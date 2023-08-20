import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileHeader} from './ProfileHeader/ProfileHeader';
import {ProfileDescription} from './ProfileDescription/ProfileDescription';
import ProfileDescriptionForm, {ProfileDescriptionDataFormType} from './ProfileDescriptionForm/ProfileDescriptionForm';
import {UserProfileType} from '../../../redux/reducers/profileReducer';



export type ProfileInfoPropsType = {
    userProfile: UserProfileType
    userStatus: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (photoFile: File) => void
    saveProfile: (newProfileData: ProfileDescriptionDataFormType)=> Promise<void | string>
}




export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    const {userProfile, userStatus, updateStatus, isOwner, updatePhoto, saveProfile} = props

    const [editMode, setEditMode] = useState(false)

    const goToEditModeHandler = () => {
        setEditMode(true)
    }

    const handleSubmit = (newProfileData: ProfileDescriptionDataFormType) => {
        saveProfile(newProfileData).then(()=> {
            setEditMode(false)
        })

    }

    return (
        <div className={s.profile}>
            <div className={s.profile__overlay}></div>
            <div className={s.profile__content }>
                <ProfileHeader userProfile={userProfile} userStatus={userStatus}
                               updateStatus={updateStatus} isOwner={isOwner}
                               updatePhoto={updatePhoto}
                />
                {editMode ?
                    <ProfileDescriptionForm initialValues={userProfile} userProfile={userProfile} onSubmit={handleSubmit}/> :
                    <ProfileDescription goToEditMode={goToEditModeHandler} isOwner={isOwner} userProfile={userProfile}/>
                }
            </div>
        </div>
    )
}