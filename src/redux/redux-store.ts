import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";


export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export  const  store = createStore(reducers);



