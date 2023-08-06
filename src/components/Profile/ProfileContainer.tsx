import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType, UserProfileType} from "../../redux/redux-store";
import {getProfile} from "../../redux/profileReducer";
import {Preloader} from "../UI/Preloader/Preloader";
import {toggleIsFetching} from "../../redux/userReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";



export type MapStateToPropsType = {
    userProfile: UserProfileType
    isFetching: boolean
}

export type MapDispatchToPropsType = {
    toggleIsFetching: (isFetching: boolean) => void
    getProfile: (userId: number) => void
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
        this.props.getProfile(userId)

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


export const ProfileContainer = connect(mapStateToProps, {getProfile, toggleIsFetching})(withRouter(ProfileClass))