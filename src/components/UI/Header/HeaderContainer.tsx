import React from 'react';
import {connect} from "react-redux";
import {AuthType, StateType} from "../../../redux/redux-store";
import axios from "axios";
import {Header} from "./Header";
import {toggleIsFetching} from "../../../redux/userReducer";
import {setUserData} from "../../../redux/auth-Reducer";


export type MapStateToPropsType = {
    userData: AuthType
}

export type MapDispatchToPropsType = {
    setUserData: (userData: AuthType)=> void
    toggleIsFetching: (isFetching: boolean) => void
}


export class HeaderClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
            this.props.toggleIsFetching(false)
            this.props.setUserData(response.data.data)
            console.log(response.data)
        }
        })
    }


    render() {
        return (
            <>
                <Header userData={this.props.userData}/>
            </>
        )

    };
}

const mapStateToProps = (state: StateType) => {
    return {
       userData: state.auth
    }
}



export const HeaderContainer = connect(mapStateToProps, {setUserData,toggleIsFetching})(HeaderClass)

