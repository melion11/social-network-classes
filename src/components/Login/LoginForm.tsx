import React from 'react';
import s from './Login.module.css'
import { Field, reduxForm, InjectedFormProps } from "redux-form";

type LoginFormData = {

}

type LoginPropsType = {}

const LoginForm: React.FC<InjectedFormProps<LoginFormData, LoginPropsType> & LoginPropsType> = (props) => {
    const { handleSubmit } = props;


    return (
        <div className={s.container}>
            <form className={s.form} onSubmit={handleSubmit}>
                <label className={s.label}>
                    Username:
                    <Field className={s.input} name="username" component="input" type="text" />
                </label>
                <label className={s.label}>
                    Password:
                    <Field className={s.input} name="password" component="input" type="password" />
                </label>
                <label className={s.checkbox}>
                    <Field name="rememberMe" component="input" type="checkbox" />
                    Remember me
                </label>
                <button className={s.button} type="submit">Log in</button>
            </form>
        </div>
    );
};

export default reduxForm<LoginFormData, LoginPropsType>({
    form: 'loginForm'
})(LoginForm);

// import React from 'react';
// import { Field, reduxForm, InjectedFormProps } from 'redux-form';
// import {LoginRequest} from "../../redux/auth-Reducer";
//
//
// interface LoginFormProps {
//     onSubmit: (values: LoginRequest) => void;
// }
//
// interface FormValues {
//     email: string;
//     password: string;
//     rememberMe: boolean;
// }
//
// const LoginForm: React.FC<InjectedFormProps<FormValues, LoginFormProps> & LoginFormProps> = ({ handleSubmit, onSubmit }) => {
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 <label htmlFor="email">Email:</label>
//                 <Field name="email" component="input" type="email" required />
//             </div>
//             <div>
//                 <label htmlFor="password">Password:</label>
//                 <Field name="password" component="input" type="password" required />
//             </div>
//             <div>
//                 <label htmlFor="rememberMe">Remember me:</label>
//                 <Field name="rememberMe" component="input" type="checkbox" />
//             </div>
//             <button type="submit">Log In</button>
//         </form>
//     );
// };
//
// export default reduxForm<FormValues, LoginFormProps>({
//     form: 'login'
// })(LoginForm);



























