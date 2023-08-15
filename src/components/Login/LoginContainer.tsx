import React from 'react';
import { connect } from 'react-redux';
import LoginForm, {LoginFormData} from './LoginForm';
import {getLogIn} from '../../redux/reducers/authReducer';
import {Redirect} from 'react-router-dom';
import {StateType} from '../../redux/redux-store';


type LoginProps = {
    isAuth: boolean
    getLogIn: (email: string, password: string, rememberMe: boolean) => void
}

const Login: React.FC<LoginProps> = ({isAuth, getLogIn}) => {

    const handleSubmit = (values: LoginFormData) => {
        const {email, password, rememberMe} = values
        console.log(values)
        getLogIn(email, password, rememberMe)
    };

    if (isAuth) return <Redirect to={'/profile'}/>


         return (
             <div>
                 <LoginForm onSubmit={handleSubmit} />
             </div>
         );
     }

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {getLogIn})(Login);

