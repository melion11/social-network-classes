import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/redux-store';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


