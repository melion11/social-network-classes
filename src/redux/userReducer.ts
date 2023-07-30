import {UnionType, UsersPageType, UserType} from "./redux-store";

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2
}


export const userReducer = (state = initialState, action: UnionType) => {
    switch (action.type) {
        case "GET-FOLLOW": {
            return {...state, users: state.users.map(u=> u.id === action.payload.userId ?
                    {...u, followed: action.payload.followValue} : u
                )}
        }
        case "GET-UNFOLLOW": {
            return {...state, users: state.users.map(u=> u.id === action.payload.userId ?
                    {...u, followed: action.payload.followValue}  : u
                )}
        }
        case "SET-USERS": {
            return {...state, users: action.payload.users}
        }
        case "SET-SELECTED-PAGE": {
            return  {...state, currentPage: action.payload.page}
        }
        case "SET-TOTAL-USER-COUNT": {
            return {...state, totalUserCount: action.payload.totalUserCount}
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

export type SetSelectedPageACType = ReturnType<typeof setSelectedPageAC>
export const setSelectedPageAC = (page: number) => {
    return {
        type: 'SET-SELECTED-PAGE',
        payload: {
            page
        }
} as const
}

export type SetTotalUserCount = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUserCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        payload: {
            totalUserCount
        }
    } as const
}
