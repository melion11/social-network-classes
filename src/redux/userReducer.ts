import {UsersPageType, UserType} from "./redux-store";
import {usersAPI} from "../api/api";


const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: []
}

export type UnionType = GetFollowACType | GetUnfollowACType | SetUsersACType |
    SetSelectedPageACType | SetTotalUserCountACType | ToggleIsFetchingACType | ToggleIsFollowType


export const userReducer = (state = initialState, action: UnionType) => {
    switch (action.type) {
        case "GET-FOLLOW": {
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId ?
                    {...u, followed: action.payload.followValue} : u
                )
            }
        }
        case "GET-UNFOLLOW": {
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId ?
                    {...u, followed: action.payload.followValue} : u
                )
            }
        }
        case "SET-USERS": {
            return {...state, users: action.payload.users}
        }
        case "SET-SELECTED-PAGE": {
            return {...state, currentPage: action.payload.page}
        }
        case "SET-TOTAL-USER-COUNT": {
            return {...state, totalUserCount: action.payload.totalUserCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        case "TOGGLE-IS-FOLLOW": {
            return {
                ...state,
                followingInProgress: action.payload.isFollow ?
                    [...state.followingInProgress, action.payload.userId] :
                    state.followingInProgress.filter(el => el !== action.payload.userId)
            }
        }
        default:
            return state
    }
}

export type GetFollowACType = ReturnType<typeof getFollow>
export const getFollow = (userId: number, followValue: boolean) => {
    return {
        type: 'GET-FOLLOW',
        payload: {
            userId,
            followValue
        }
    } as const
}

export type GetUnfollowACType = ReturnType<typeof getUnfollow>
export const getUnfollow = (userId: number, followValue: boolean) => {
    return {
        type: 'GET-UNFOLLOW',
        payload: {
            userId,
            followValue
        }
    } as const
}

export type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export type SetSelectedPageACType = ReturnType<typeof setSelectedPage>
export const setSelectedPage = (page: number) => {
    return {
        type: 'SET-SELECTED-PAGE',
        payload: {
            page
        }
    } as const
}

export type SetTotalUserCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUserCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        payload: {
            totalUserCount
        }
    } as const
}

export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export type ToggleIsFollowType = ReturnType<typeof toggleIsFollow>
export const toggleIsFollow = (userId: number, isFollow: boolean) => {
    return {
        type: 'TOGGLE-IS-FOLLOW',
        payload: {
            userId,
            isFollow
        }
    } as const
}


export const getUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        }
    )
}

export const follow = (userId: number) => (dispatch: any) => {
    dispatch(toggleIsFollow(userId,true))
    usersAPI.getFollow(userId).then(data => {
        if (data.resultCode === 0) dispatch(getFollow(userId, true))
        dispatch(toggleIsFollow(userId,false))
    })
}

export const unfollow = (userId: number) => (dispatch: any) => {
    dispatch(toggleIsFollow(userId,true))
    usersAPI.getUnfollow(userId).then(data => {
        dispatch(toggleIsFollow(userId,false))
        if (data.resultCode === 0) dispatch(getUnfollow(userId, false))
        dispatch(toggleIsFollow(userId,false))
    })
}