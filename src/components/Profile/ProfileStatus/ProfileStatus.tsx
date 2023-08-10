import React, {ChangeEvent, createRef, useRef} from 'react';
import s from './ProfileStatus.module.css'


export type ProfileInfoPropsType = {
    userStatus: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<ProfileInfoPropsType> {
    // statusInputRef = createRef<HTMLInputElement>()
    state = {
        editMode: false,
        userStatus: this.props.userStatus
    }


    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.props.updateStatus(this.state.userStatus)
          this.setState({
            editMode: false
        })

    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userStatus: e.currentTarget.value
        })
    }

    // ref={this.statusInputRef}

    render() {

        const spanMode = <span className={s['status-span']} onDoubleClick={this.activateEditMode.bind(this)}>
            {this.props.userStatus || 'Click to add status'}
        </span>


        const inputMode = <input className={s['status-input']} autoFocus={true} value={this.state.userStatus}
                                 onChange={this.onChangeHandler} onBlur={this.deActivateEditMode.bind(this)}
        />


        return (
            <div className={s['status-container']}>
                {this.state.editMode ? inputMode : spanMode}
            </div>
        )
    }
}