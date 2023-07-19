import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addUserPost, StateType, updateNewPostText} from "./redux/state";


export const rerenderEntireThree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App addUserPost={addUserPost} updateNewPostText={updateNewPostText} state={state}/>
    </BrowserRouter>
        , document.getElementById('root')
);
}
