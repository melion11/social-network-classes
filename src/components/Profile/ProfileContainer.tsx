import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType, UserProfileType} from "../../redux/redux-store";
import {getProfile} from "../../redux/profileReducer";
import {Preloader} from "../UI/Preloader/Preloader";
import {toggleIsFetching} from "../../redux/userReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";



export type MapStateToPropsType = {
    userProfile: UserProfileType
    isFetching: boolean
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    toggleIsFetching: (isFetching: boolean) => void
    getProfile: (userId: number) => void
}


const mapStateToProps = (state: StateType) => {
    return {
        isFetching: state.profilePage.isFetching,
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth

    }
}


export class ProfileClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<any>> {


    componentDidMount() {
        let userId = this.props.match.params.userId || 2
        this.props.getProfile(userId)

    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                {this.props.isFetching ? <Preloader/> :
                    <Profile userProfile={this.props.userProfile}/>
                }
            </div>
        )
    }

}


export const ProfileContainer = connect(mapStateToProps, {getProfile, toggleIsFetching})(withRouter(ProfileClass))