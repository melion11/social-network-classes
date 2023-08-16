import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";


type MapStateToProps = {
     isAuth: boolean
}

const mapStateToProps = (state:StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}



export  const withRedirect  =  (Component: ComponentType<any>) => {

    class WrappedComponent extends  React.Component<MapStateToProps> {

        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return  <Component {...this.props}/>;
        }
    }
    return connect(mapStateToProps)(WrappedComponent)

};





