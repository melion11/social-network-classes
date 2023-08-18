import React from 'react';
import { connect } from 'react-redux';
import LoginForm, {LoginFormData} from './LoginForm';
import {getCaptchaUrl, getLogIn} from '../../redux/reducers/authReducer';
import {Redirect} from 'react-router-dom';
import {StateType} from '../../redux/redux-store';


type LoginProps = {
    isAuth: boolean
    captcha: string
    getLogIn: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login: React.FC<LoginProps> = ({isAuth, getLogIn, captcha}) => {

    const handleSubmit = (values: LoginFormData) => {
        const {email, password, rememberMe, captcha} = values
        getLogIn(email, password, rememberMe, captcha)
    };

    if (isAuth) return <Redirect to={'/profile'}/>


         return (
             <div>
                 <LoginForm onSubmit={handleSubmit} captcha={captcha}/>
             </div>
         );
     }

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}


export default connect(mapStateToProps, {getLogIn})(Login);

