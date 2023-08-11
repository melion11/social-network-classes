import {AuthType, StateType} from "./redux-store";
import {toggleIsFetching, ToggleIsFetchingACType} from "./userReducer";
import {authAPI} from "../api/api";



const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    error: null
}


// export type LoginRequest = {
//     email: string;
//     password: string;
//     rememberMe: boolean;
// }


export const authReducer = (state: AuthType = initialState, action: UnionType): AuthType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.payload.userData, isAuth: true}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        // case 'LOGIN_SUCCESS': {
        //     return {...state, id: action.payload.userId, error: null};
        // }
        // case 'LOGIN_FAILURE': {
        //     return {...state, id: null, error: action.payload.error};
        // }
        default:
            return state
    }
}

export type UnionType = SetUserDataACType | ToggleIsFetchingACType

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







// export type LoginSuccessType = ReturnType<typeof getLoginSuccess>
// export const getLoginSuccess = (userId: number) => {
//     return {
//         type: 'LOGIN_SUCCESS',
//         payload: {
//             userId
//         }
//     } as const
// }
//
// export type LoginFailureType = ReturnType<typeof getLoginFailure>
// export const getLoginFailure = (error: string) => {
//     return {
//         type: 'LOGIN_FAILURE',
//         payload: {
//             error
//         }
//     } as const
// }
//
//
// export const login = (requestData: LoginRequest): ThunkAction<void, StateType, unknown, LoginSuccessType | LoginFailureType> => {
//     return async (dispatch) => {
//         try {
//             const response = await authAPI.getLogIn(requestData);
//             dispatch(getLoginSuccess(response.data.userId));
//         } catch (error: any) {
//             dispatch(getLoginFailure(error.message));
//         }
//     };
// };