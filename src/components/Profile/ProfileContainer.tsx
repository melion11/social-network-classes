import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType, UserProfileType} from "../../redux/redux-store";
import {setUser} from "../../redux/profileReducer";
import axios from "axios";
import {Preloader} from "../UI/Preloader/Preloader";
import {toggleIsFetching} from "../../redux/userReducer";
import {withRouter} from "react-router-dom";
import { useParams } from 'react-router-dom'



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
        userProfile: state.profilePage.userProfile
    }
}


export class ProfileClass extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get('https://social-network.samuraijs.com/api/1.0//profile/2').then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUser(response.data)


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

// const WithRouterDataComponent = withRouter(ProfileClass)

export const ProfileContainer = connect(mapStateToProps, {setUser, toggleIsFetching})(ProfileClass)