import React from 'react';
import {connect} from "react-redux";
import {AuthType, StateType} from "../../../redux/redux-store";
import {Header} from "./Header";
import {toggleIsFetching} from "../../../redux/userReducer";
import {setUserData} from "../../../redux/auth-Reducer";
import {authAPI} from "../../../api/api";


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
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
            this.props.toggleIsFetching(false)
            this.props.setUserData(data.data)
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

