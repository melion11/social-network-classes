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
        <div className={s.postContainer}>
            <form className={s.postForm} onSubmit={handleSubmit}>
                <div className={s.postInputContainer}>
                    <Field
                        className={s.postInput}
                        component={Textarea}
                        name="newMessageBody"
                        validate={[required, maxLength20]}
                        placeholder="Write your post..."
                    />
                </div>
                <button className={s.postButton} type="submit">
                    Add Post
                </button>
            </form>
        </div>
    )
}


export default reduxForm<InputDataType, AddPostPropsType>({
    form: 'postForm',
})(AddPostForm)