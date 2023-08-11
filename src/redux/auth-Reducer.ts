import {AuthType} from './redux-store';
import {toggleIsFetching} from './userReducer';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';



const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}



export const authReducer = (state: AuthType = initialState, action: UnionType): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.payload.userData, isAuth: true}
        }
        case 'RESET-USER-DATA': {
            return {...state, ...initialState}
        }


        default:
            return state
    }
}

export type UnionType = SetUserDataACType | ResetUserDataACType

export type SetUserDataACType = ReturnType<typeof setUserData>
export const setUserData = (userData: AuthType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            userData
        }
    } as const
}

export const getAuth = () => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    authAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            dispatch(toggleIsFetching(false))
            dispatch(setUserData(data.data))
        }
    })
}

export const getLogIn = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    let data = await authAPI.getLogIn(email, password, rememberMe)
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
        type: 'RESET-USER-DATA',
    } as const
}


export const getLogOut = () => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    authAPI.getLogOut().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(resetUserData())
        }
    })
}




