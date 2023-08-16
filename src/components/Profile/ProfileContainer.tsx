import React from 'react';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {StateType, UserProfileType} from '../../redux/redux-store';
import {getProfile, getStatus, updatePhoto, updateStatus} from '../../redux/reducers/profileReducer';
import {Preloader} from '../common/Preloader/Preloader';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withRedirect} from '../../hoc/withRedirect';
import {compose} from 'redux';
import {toggleIsFetching} from '../../redux/reducers/appReducer';


export type MapStateToPropsType = {
    userProfile: UserProfileType
    isFetching: boolean
    userStatus: string
    authUserId: number | null
    isAuth: boolean

}

export type MapDispatchToPropsType = {
    toggleIsFetching: (isFetching: boolean) => void
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    updatePhoto: (photoFile: File) => void
}

type PathParamsType = {
    userId: string
}


const mapStateToProps = (state: StateType) => {
    return {
        isFetching: state.appPage.isFetching,
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.status,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}


type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileClass extends React.Component<ProfileType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            if (this.props.authUserId !== null) {
                userId = String(this.props.authUserId)
            } else {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileType>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId ) {
            this.refreshProfile()

        }
    }


    render() {

        return (
            <div>
                {this.props.isFetching ? <Preloader/> :
                    <Profile userProfile={this.props.userProfile} userStatus={this.props.userStatus}
                             updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId}
                                updatePhoto={this.props.updatePhoto}
                    />
                }
            </div>
        )
    }

}

const ProfileContainer = compose<React.ComponentType>(withRedirect, withRouter,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, toggleIsFetching , updatePhoto}))(ProfileClass)


export default ProfileContainer

