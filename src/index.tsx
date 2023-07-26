import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";



const rerenderEntireThree = (state: any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)} state={state}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())

store.subscribe(() => {
        const state = store.getState()
        rerenderEntireThree(state)
    })