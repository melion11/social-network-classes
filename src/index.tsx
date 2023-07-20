import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addUserPost, StateType, subscribe, updateNewPostText} from "./redux/state";
import {state} from "./redux/state";

const rerenderEntireThree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App addUserPost={addUserPost} updateNewPostText={updateNewPostText} state={state}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireThree(state)

subscribe(rerenderEntireThree)