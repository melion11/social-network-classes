import {AuthType} from "./redux-store";
import {ToggleIsFetchingACType} from "./userReducer";


const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}




export const authReducer = (state : AuthType = initialState, action: UnionType): AuthType => {
        switch (action.type) {
            case "SET-USER-DATA": {
                return {...state, ...action.payload.userData, isAuth: true}
            }
            case "TOGGLE-IS-FETCHING": {
                return {...state, isFetching: action.payload.isFetching}
            }

            default: return state
        }
}

export type UnionType =  SetUserDataACType | ToggleIsFetchingACType

export type SetUserDataACType = ReturnType<typeof setUserData>
export const setUserData = (userData: AuthType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            userData
        }
    } as const
}

