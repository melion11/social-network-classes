import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import {AuthType, getLogOut} from '../../redux/reducers/authReducer';
import {StateType} from '../../redux/redux-store';



export type MapStateToPropsType = {
    userData: AuthType
}

export type MapDispatchToPropsType = {
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



export const HeaderContainer = connect(mapStateToProps, {getLogOut})(HeaderClass)

