import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Music} from "./components/UI/Music/Music";
import {News} from "./components/UI/News/News";
import {Navbar} from "./components/UI/NavBar/Navbar";
import {Settings} from "./components/UI/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/UI/Header/HeaderContainer";


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
                <Route path={'/news'} render={()=> <News/>}/>
                <Route path={'/music'} render={()=> <Music/>}/>
                <Route path={'/users'} render={()=> <UsersContainer/>}/>
                <Route path={'/settings'} render={()=> <Settings/>}/>
            </div>
        </div>
    )
}

export default App;
