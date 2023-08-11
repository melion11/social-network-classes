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
        <form className={s.sendForm} onSubmit={handleSubmit}>
           <Field  className={s.textarea} placeholder={'Type your new message'}
                   component={Textarea}  name={'newMessageBody'}
                    validate={[required, maxLength100]}
           />
           <button className={s.button}>Send</button>
        </form>
    );
};

export default reduxForm<MessageInputType>({
    form: 'dialogMessageForm'
})(MessageSender)