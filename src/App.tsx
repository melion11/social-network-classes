import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {StateType, UnionType} from "./redux/store";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Navbar} from "./components/NavBar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Settings} from "./components/Settings/Settings";
import {Header} from "./components/Header/Header";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: any
    state: StateType
    dispatch: (action: UnionType)=> void
}


function App(props: AppPropsType) {



    return (
        <div className="appWrapper">

            <Header/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Route path={'/profile'}
                       render={()=> <Profile store={props.store}/>}/>
                <Route path={'/dialogs'}
                       render={()=> <DialogsContainer store={props.store}/>}/>
                <Route path={'/news'} render={()=> <News/>}/>
                <Route path={'/music'} render={()=> <Music/>}/>
                <Route path={'/settings'} render={()=> <Settings/>}/>
            </div>
        </div>
    )
}

export default App;
