import React, {ChangeEvent, FC} from 'react';
import s from './MessageSender.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl, Textarea} from '../../../common/FormControls/FormsControls';
import {maxLength, required} from '../../../../utils/validators/validators';


export type MessageInputType = {
    newMessageBody: string
}

const maxLength100 = maxLength(100)

const MessageSender: FC<InjectedFormProps<MessageInputType>> = (props) => {

    const {handleSubmit} = props


    return (
        <form onSubmit={handleSubmit} className={s.sendForm}>
            <input type="text" className={s.messageInput} placeholder="Type your message..."/>
            <button type="submit" className={s.sendButton}>
                <i className="fa fa-paper-plane"></i>
            </button>
        </form>
    )
}
export default reduxForm<MessageInputType>({
    form: 'dialogMessageForm'
})(MessageSender)