import React from 'react';
import {Login} from "./Login";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";


export type MapDispatchToPropsType = {

}

export type MapStateToPropsType = {
    isAuth: boolean
}




export class LoginClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType, any> {


    componentDidMount() {

    }

    render() {


        return <Login/>;
    }

}




const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}




export const LoginContainer = connect(mapStateToProps, {})(LoginClass)