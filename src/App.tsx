import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/NavBar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./redux/state";


type AppPropsType = {
    store: any
    state: StateType
    addUserPost: ()=> void
    updateNewPostText: (updatePostText: string) => void
}


function App(props: AppPropsType) {




    return (
        <div className="appWrapper">

            <Header/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Route path={'/profile'}
                       render={()=> <Profile
                                            profilePage={props.state.profilePage}
                                            addUserPost={props.addUserPost}
                                            updateNewPostText={props.updateNewPostText}
                       />}/>
                <Route path={'/dialogs'}
                       render={()=> <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path={'/news'} render={()=> <News/>}/>
                <Route path={'/music'} render={()=> <Music/>}/>
                <Route path={'/settings'} render={()=> <Settings/>}/>
            </div>
        </div>
    )
}

export default App;
