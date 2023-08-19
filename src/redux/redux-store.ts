import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {ProfilePageType, profileReducer} from './reducers/profileReducer';
import {DialogsPageType, dialogsReducer} from './reducers/dialogsReducer';
import {userReducer, UsersPageType} from './reducers/userReducer';
import {authReducer, AuthType} from './reducers/authReducer';
import { reducer as formReducer } from 'redux-form'
import thunk, {ThunkAction} from 'redux-thunk';
import {AppPageType, appReducer} from './reducers/appReducer';



export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    auth: AuthType
    appPage: AppPageType
}

export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    appPage: appReducer,
    form: formReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export  const  store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));


export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    AnyAction>

// @ts-ignore
window.store = store


