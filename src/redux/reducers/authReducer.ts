import {AppThunk, AuthType} from '../redux-store';
import {authAPI} from '../../api/api';
import {stopSubmit} from 'redux-form';
import {toggleIsFetching} from './appReducer';


const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}


export const authReducer = (state: AuthType = initialState, action: UnionType): AuthType => {


    switch (action.type) {
        case '/auth/SET-USER-DATA': {
            return {...state, ...action.payload.userData, isAuth: true}
        }
        case '/auth/RESET-USER-DATA': {
            return {...state, ...action.payload}
        }


        default:
            return state
    }
}

export type UnionType = SetUserDataACType | ResetUserDataACType

export type SetUserDataACType = ReturnType<typeof setUserData>
export const setUserData = (userData: AuthType) => {
    return {
        type: '/auth/SET-USER-DATA',
        payload: {
            userData
        }
    } as const
}

export const getAuth = (): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await authAPI.getAuth()
    if (data.resultCode === 0) {
        dispatch(toggleIsFetching(false))
        dispatch(setUserData(data.data))
    }

}

export const getLogIn = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await authAPI.getLogIn(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(toggleIsFetching(false))
        dispatch(getAuth())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('loginForm', {_error: message}))
    }
}


export type ResetUserDataACType = ReturnType<typeof resetUserData>
export const resetUserData = () => {
    return {
        type: '/auth/RESET-USER-DATA',
        payload: {
            id: null,
            email: null,
            login: null,
            isAuth: false
        }
    } as const
}

export const getLogOut = (): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await authAPI.getLogOut()
    dispatch(toggleIsFetching(false))
    if (data.resultCode === 0) dispatch(resetUserData())
}




