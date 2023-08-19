import {AppThunk} from '../redux-store';
import {getAuth} from './authReducer';

export type AppPageType = {
    initialized: boolean
    isFetching: boolean
}


const initialState = {
    initialized: false,
    isFetching: false
}

export const appReducer = (state: AppPageType = initialState, action: UnionType): AppPageType => {
    switch (action.type) {
        case '/app/INITIALIZED-SUCCESS': {
            return {...state, initialized: true}
        }
        case "/app/TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        default:
            return state
    }
}

export type UnionType = SetInitializedACType | ToggleIsFetchingACType

export type SetInitializedACType = ReturnType<typeof setInitialized>
export const setInitialized = () => {
    return {
        type: '/app/INITIALIZED-SUCCESS',
    } as const
}

export const initializeApp = (): AppThunk => async (dispatch) => {
       await dispatch(getAuth())
       dispatch(setInitialized())
}


export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: '/app/TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}