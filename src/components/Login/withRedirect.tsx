import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";


type MapStateToProps = {
     isAuth: boolean
}

const mapStateToProps = (state:StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}



export  const withRedirect  =  (Component: any) => {

    class WrappedComponent extends  React.Component<any> {

        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return  <Component {...this.props}/>;
        }
    }

    const wrappedComponentContainer = connect(mapStateToProps, {})(WrappedComponent)

    return wrappedComponentContainer;
};





