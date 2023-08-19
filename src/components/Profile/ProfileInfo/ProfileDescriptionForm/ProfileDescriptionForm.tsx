import React from 'react';
import s from './ProfileDescriptionForm.module.css'
import {createField, Input, Textarea} from '../../../common/FormControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {UserProfileContacts, UserProfileType} from '../../../../redux/reducers/profileReducer';






export type ProfileDescriptionDataFormType = {
    aboutMe: string
    contacts: UserProfileContacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
}

export type AdditionalPropsProfileFormType = {
    userProfile: UserProfileType
}

const ProfileDescriptionForm: React.FC<InjectedFormProps<ProfileDescriptionDataFormType & AdditionalPropsProfileFormType> & AdditionalPropsProfileFormType> = ({handleSubmit,userProfile, initialValues,  error})=> {


    return  (
        <form className={s.profile__description} onSubmit={handleSubmit}>
            <div className={s.profile__item}>
        <span className={s.profile__label}>
          Full name:
        </span>
                {createField('Full name', 'fullName', [], Input)}
            </div>
            <div className={s.profile__item}>
        <span className={s.profile__label}>
          About me:
        </span>
                {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div className={s.profile__item}>
        <span className={s.profile__label}>
          Looking for a job:
        </span>
                {createField('', 'lookingForAJob',[], Input, {type: 'checkbox'})}
            </div>
            <div className={s.profile__item}>
        <span className={s.profile__label}>
          My professional skills:
        </span>
                <div className={s.profile__text}>
                    {createField('My professional skills', 'lookingForAJobDescription',[], Textarea)}
                </div>
            </div>
            <div className={s.profile__item}>
        <span className={s.profile__label}>
          Contacts:
        </span>
                <div className={s.profile__contacts}>
                    {Object.keys(userProfile.contacts).map((key: string) => {
                        return (
                            <div key={key} className={s.profile__contact}>
                                {createField(key, `contacts.${key}`, [], Input)}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={s.button__container}>
                <button>Save</button>
            </div>
        </form>

    )
}

export default reduxForm<ProfileDescriptionDataFormType & AdditionalPropsProfileFormType, any>
({form: 'edit-profile'})(ProfileDescriptionForm);