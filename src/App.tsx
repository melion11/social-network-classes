import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {Navbar} from './components/NavBar/Navbar';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {NewsContainer} from './components/News/NewsContainer';
import {SettingsContainer} from './components/Settings/SettingsContainer';
import {MusicContainer} from './components/Music/MusicContainer';
import LoginContainer from './components/Login/LoginContainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/reducers/appReducer';
import {StateType} from './redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';


type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void

}

type AppContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppContainerPropsType> {

    componentDidMount() {
        console.log(this.props.initialized)
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={'appWrapperContent'}>
                    <Route exact path={'/'} render={() => <ProfileContainer/>}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <NewsContainer/>}/>
                    <Route path={'/music'} render={() => <MusicContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/settings'} render={() => <SettingsContainer/>}/>
                    <Route path={'/login'}
                           render={() => <LoginContainer/>}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: StateType) => {
    return {
        initialized: state.appPage.initialized
    }
}


export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)


