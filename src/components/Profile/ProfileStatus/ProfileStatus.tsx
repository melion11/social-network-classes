import React from 'react';
import s from './ProfileStatus.module.css'
import {UserProfileType} from "../../../redux/redux-store";


export type ProfileInfoPropsType = {
    status: string
}


export class ProfileStatus extends React.Component<ProfileInfoPropsType> {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState( {
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState( {
            editMode: false
        })
    }

    render() {

        const spanMode =  <div><span onDoubleClick={this.activateEditMode.bind(this)} className={s.profile__status}>{this.props.status}</span></div>

        const inputMode =  <div><input autoFocus={true} onChange={()=>{}} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}/></div>


        return (
            <div>
                {this.state.editMode ? inputMode : spanMode}
            </div>
        )
    }
}