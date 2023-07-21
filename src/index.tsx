import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from "./redux/state";


const rerenderEntireThree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App addUserPost={store.addUserPost.bind(store)} store={store} updateNewPostText={store.updateNewPostText.bind(store)} state={state}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())

store.subscribe(rerenderEntireThree)