import React from 'react';
import s from './Login.module.css'
import {Field, reduxForm, InjectedFormProps} from 'redux-form';
import {createField, Input} from '../common/FormControls/FormsControls';
import {required} from '../../utils/validators/validators';

export type LoginFormData = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type AdditionalLoginFormDataType = {
    captcha: string
}

const LoginForm: React.FC<InjectedFormProps<LoginFormData, AdditionalLoginFormDataType> & AdditionalLoginFormDataType> = (props) => {
    const {handleSubmit, error, captcha} = props;


    return (
        <div className={s.container}>
            <form className={s.form} onSubmit={handleSubmit}>
                <label className={s.label}>
                    Email:
                    <Field className={s.input} name="email" component={Input} type="text"
                           validate={[required]}
                    />
                </label>
                <label className={s.label}>
                    Password:
                    <Field className={s.input} name="password" component={Input} type="password"
                           validate={[required]}
                    />
                </label>
                <label className={s.checkbox}>
                    <Field name="rememberMe" component="Input" type="checkbox"/>
                    Remember me
                </label>

                {captcha && <img src={captcha}/>}
                {captcha && createField('Symbols from image', 'captcha', [required], Input)}
                {error && <div className={s.formSummaryError}>{error}</div>}

                <button className={s.button} type="submit">Log in</button>


            </form>
        </div>
    );
};

export default reduxForm<LoginFormData, AdditionalLoginFormDataType>({
    form: 'loginForm'
})(LoginForm);






















