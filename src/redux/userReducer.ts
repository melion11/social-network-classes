import {UnionType, UsersPageType, UserType} from "./redux-store";

const initialState: UsersPageType = {
    users: []
}


export const userReducer = (state = initialState, action: UnionType) => {
    switch (action.type) {
        case "GET-FOLLOW": {
            return {...state, users: state.users.map(u=> u.userId === action.payload.userId ?
                    {...u, follow: action.payload.followValue} : u
                )}
        }
        case "GET-UNFOLLOW": {
            return {...state, users: state.users.map(u=> u.userId === action.payload.userId ?
                    {...u, follow: action.payload.followValue}  : u
                )}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.payload.users]}
        }

        default:
            return state
    }
}



export type GetFollowACType = ReturnType<typeof getFollowAC>
export const getFollowAC = (userId: number,followValue: boolean) => {
    return {
        type: 'GET-FOLLOW',
        payload: {
            userId,
            followValue
        }
    } as const
}

export type GetUnfollowACType = ReturnType<typeof getUnfollowAC>
export const getUnfollowAC = (userId: number, followValue: boolean) => {
    return {
        type: 'GET-UNFOLLOW',
        payload: {
            userId,
            followValue
        }
    } as const
}

export type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}