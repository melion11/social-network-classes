import React from 'react';
import {connect} from "react-redux";
import {AuthType, StateType} from "../../../redux/redux-store";
import {Header} from "./Header";
import {getAuth, getLogOut} from '../../../redux/auth-Reducer';



export type MapStateToPropsType = {
    userData: AuthType
}

export type MapDispatchToPropsType = {
    getAuth: ()=> void
    getLogOut: ()=> void
}


export class HeaderClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {



    render() {



        return (
            <>
                <Header userData={this.props.userData} getLogOut={this.props.getLogOut}/>
            </>
        )

    };
}

const mapStateToProps = (state: StateType) => {
    return {
       userData: state.auth
    }
}



export const HeaderContainer = connect(mapStateToProps, {getAuth, getLogOut})(HeaderClass)

