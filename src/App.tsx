import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Navbar} from "./components/UI/NavBar/Navbar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/UI/Header/HeaderContainer";
import {NewsContainer} from "./components/UI/News/NewsContainer";
import {SettingsContainer} from "./components/UI/Settings/SettingsContainer";
import {MusicContainer} from "./components/UI/Music/MusicContainer";
import LoginContainer from "./components/Login/LoginContainer";



function App() {

    return (
        <div className="appWrapper">

            <HeaderContainer/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Route exact path={'/'} render={()=> <ProfileContainer />}/>
                <Route path={'/profile/:userId?'}
                       render={()=> <ProfileContainer />}/>
                <Route path={'/dialogs'}
                       render={()=> <DialogsContainer/>}/>
                <Route path={'/news'} render={()=> <NewsContainer/>}/>
                <Route path={'/music'} render={()=> <MusicContainer/>}/>
                <Route path={'/users'} render={()=> <UsersContainer/>}/>
                <Route path={'/settings'} render={()=> <SettingsContainer/>}/>
                <Route path={'/login'}
                       render={()=> <LoginContainer/>}/>
            </div>
        </div>
    )
}

export default App;
