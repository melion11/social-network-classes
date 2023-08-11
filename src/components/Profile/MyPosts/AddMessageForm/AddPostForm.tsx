import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import s from './AddPostForm.module.css'
import {maxLength, required} from '../../../../utils/validators/validators';
import {Textarea} from '../../../common/FormControls/FormsControls';

export type InputDataType = {
    newMessageBody: string
}

type AddPostPropsType = {

}

const maxLength20 = maxLength(20)

const AddPostForm: FC<InjectedFormProps<InputDataType>> = (props) => {

    const { handleSubmit} = props;



    return (
        <form className={s.postForm} onSubmit={handleSubmit}>
            <div className={s.postInputContainer}>
                <Field className={s.postInput} component={Textarea} name={'newMessageBody'}
                validate={[required, maxLength20]}
                />
            </div>
            <button className={s.postButton}>Add Post</button>
        </form>
    )
}


export default reduxForm<InputDataType, AddPostPropsType>({
    form: 'postForm',
})(AddPostForm)