import React from 'react';
import s from './ProfileDescriptionForm.module.css'
import {createField, Input, Textarea} from '../../../common/FormControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {UserProfileContacts, UserProfileType} from '../../../../redux/redux-store';





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


    return (
        <form className={s.profile__description} onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            <div className={s.profile__item}>
                <span className={s.profile__label}>Full name:
                    {createField('Full name', 'fullName', [], Input)}
                </span>
             </div>
            <div className={s.profile__item}>
                    <span className={s.profile__label}>About me:
                        {createField('About me', 'aboutMe', [], Textarea)}
                </span>
            </div>
            <div className={s.profile__item}>
                <span className={s.profile__label}>Looking for a job:
                    {createField('', 'lookingForAJob',[], Input, {type: 'checkbox'})}
                </span>
             </div>
            <div className={s.profile__item}>
                <span className={s.profile__label}>My professional skills:</span>
                <div className={s.profile__text}>
                {createField('My professional skills', 'lookingForAJobDescription',[], Textarea)}
                </div>
            </div>
            <div className={s.profile__item}>
                <span className={s.profile__label}>Contacts: {
                    Object.keys(userProfile.contacts).map((key: string) => {
                        return (
                            <div key={key}>
                                <b>{key} : {createField(key, `contacts.${key}`, [], Input)}</b>
                            </div>
                        )
                    })
                }</span>
            </div>
        </form>

    )
}

export default reduxForm<ProfileDescriptionDataFormType & AdditionalPropsProfileFormType, any>
({form: 'edit-profile'})(ProfileDescriptionForm);