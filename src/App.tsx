import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Music} from "./components/UI/Music/Music";
import {News} from "./components/UI/News/News";
import {Navbar} from "./components/UI/NavBar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Settings} from "./components/UI/Settings/Settings";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Header} from "./components/UI/Header/Header";
import {Users} from "./components/Users/Users";
import {UsersContainer} from "./components/Users/UsersContainer";


type AppPropsType = {

}


function App(props: AppPropsType) {



    return (
        <div className="appWrapper">

            <Header/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Route path={'/profile'}
                       render={()=> <Profile />}/>
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
