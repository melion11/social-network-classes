import React from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Navbar} from './components/NavBar/Navbar';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {NewsContainer} from './components/News/NewsContainer';
import {SettingsContainer} from './components/Settings/SettingsContainer';
import {MusicContainer} from './components/Music/MusicContainer';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/reducers/appReducer';
import {StateType, store} from './redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';
import Error404 from './components/common/Error404/Error404';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'))


type MapStateToPropsType = {
    initialized: boolean
    isAuth: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void

}

type AppContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppContainerPropsType> {

    componentDidMount() {
        this.props.initializeApp()

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="appWrapper">
                <HeaderContainer/>
                {this.props.isAuth && <Navbar/>}
                <div className={'appWrapperContent'}>
                    <Switch>
                    <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                    <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                    <Route path={'/news'} render={() => <NewsContainer/>}/>
                    <Route path={'/music'} render={() => <MusicContainer/>}/>
                    <Route path={'/users'} render={withSuspense(UsersContainer)}/>
                    <Route path={'/settings'} render={() => <SettingsContainer/>}/>
                    <Route path={'/login'} render={withSuspense(LoginContainer)}/>
                    <Route exact path="/" render={() => <Redirect to="/profile"/>}/>

                    <Route path={'*'} render={()=> <Error404/>}/>
                    </Switch>

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: StateType) => {
    return {
        initialized: state.appPage.initialized,
        isAuth: state.auth.isAuth
    }
}


export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

export const SamuraiApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}
