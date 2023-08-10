import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType, UserProfileType} from "../../redux/redux-store";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {Preloader} from "../UI/Preloader/Preloader";
import {toggleIsFetching} from "../../redux/userReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withRedirect} from "../Login/withRedirect";
import {compose} from "redux";


export type MapStateToPropsType = {
    userProfile: UserProfileType
    isFetching: boolean
    userStatus: string

}

export type MapDispatchToPropsType = {
    toggleIsFetching: (isFetching: boolean) => void
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}


const mapStateToProps = (state: StateType) => {
    return {
        isFetching: state.profilePage.isFetching,
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.status
    }
}


export class ProfileClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<any>> {


    componentDidMount() {
        let userId = this.props.match.params.userId || 29258
        this.props.getProfile(userId)
        this.props.getStatus(userId)
        console.log( this.props.getStatus(userId))
    }



    render() {

        return (
            <div>
                {this.props.isFetching ? <Preloader/> :
                    <Profile userProfile={this.props.userProfile} userStatus={this.props.userStatus} updateStatus={this.props.updateStatus}/>
                }
            </div>
        )
    }

}

export const ProfileContainer = compose(
    withRedirect,
    withRouter,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, toggleIsFetching}))(ProfileClass)


