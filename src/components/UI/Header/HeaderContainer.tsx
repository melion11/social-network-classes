import React from 'react';
import {connect} from "react-redux";
import {AuthType, StateType} from "../../../redux/redux-store";
import {Header} from "./Header";
import {getAuth} from "../../../redux/auth-Reducer";



export type MapStateToPropsType = {
    userData: AuthType
}

export type MapDispatchToPropsType = {
    getAuth: ()=> void
}


export class HeaderClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {


    componentDidMount() {
        this.props.getAuth()
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



export const HeaderContainer = connect(mapStateToProps, {getAuth})(HeaderClass)

