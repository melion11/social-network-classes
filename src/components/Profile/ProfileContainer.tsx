import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType, UserProfileType} from "../../redux/redux-store";
import {setUser} from "../../redux/profileReducer";
import axios from "axios";
import {Preloader} from "../UI/Preloader/Preloader";
import {toggleIsFetching} from "../../redux/userReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {useParams} from 'react-router-dom'
import {profileAPI} from "../../api/api";


export type MapStateToPropsType = {
    userProfile: UserProfileType
    isFetching: boolean
}

export type MapDispatchToPropsType = {
    toggleIsFetching: (isFetching: boolean) => void
    setUser: (user: UserProfileType) => void
}


const mapStateToProps = (state: StateType) => {
    return {
        isFetching: state.profilePage.isFetching,
        userProfile: state.profilePage.userProfile,

    }
}


export class ProfileClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<any>> {


    componentDidMount() {
        let userId = this.props.match.params.userId || 2

        this.props.toggleIsFetching(true)
        profileAPI.getProfile(userId).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUser(data)
        })
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> :
                    <Profile userProfile={this.props.userProfile}/>
                }
            </div>
        )
    }

}


export const ProfileContainer = connect(mapStateToProps, {setUser, toggleIsFetching})(withRouter(ProfileClass))