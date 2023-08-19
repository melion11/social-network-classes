import {AppThunk} from '../redux-store';
import {usersAPI} from '../../api/api';
import {toggleIsFetching, ToggleIsFetchingACType} from './appReducer';

export type PhotosType = {
    small: string,
    large: string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    followingInProgress: number[]
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 6,
    totalUserCount: 0,
    currentPage: 2,
    followingInProgress: []
}

export type UnionType = GetFollowUnfollowACType | SetUsersACType |
    SetSelectedPageACType | SetTotalUserCountACType | ToggleIsFetchingACType | ToggleIsFollowType


export const userReducer = (state = initialState, action: UnionType) => {
    switch (action.type) {
        case '/user/GET-FOLLOW-UNFOLLOW': {
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId ?
                    {...u, followed: action.payload.followValue} : u
                )
            }
        }
        case '/user/SET-USERS': {
            return {...state, users: action.payload.users}
        }
        case '/user/SET-SELECTED-PAGE': {
            return {...state, currentPage: action.payload.page}
        }
        case '/user/SET-TOTAL-USER-COUNT': {
            return {...state, totalUserCount: action.payload.totalUserCount}
        }
        case '/user/TOGGLE-IS-FOLLOW': {
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

export type GetFollowUnfollowACType = ReturnType<typeof getFollowUnfollow>
export const getFollowUnfollow = (userId: number, followValue: boolean) => {
    return {
        type: '/user/GET-FOLLOW-UNFOLLOW',
        payload: {
            userId,
            followValue
        }
    } as const
}

export type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => {
    return {
        type: '/user/SET-USERS',
        payload: {
            users
        }
    } as const
}

export type SetSelectedPageACType = ReturnType<typeof setSelectedPage>
export const setSelectedPage = (page: number) => {
    return {
        type: '/user/SET-SELECTED-PAGE',
        payload: {
            page
        }
    } as const
}

export type SetTotalUserCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUserCount: number) => {
    return {
        type: '/user/SET-TOTAL-USER-COUNT',
        payload: {
            totalUserCount
        }
    } as const
}

export type ToggleIsFollowType = ReturnType<typeof toggleIsFollow>
export const toggleIsFollow = (userId: number, isFollow: boolean) => {
    return {
        type: '/user/TOGGLE-IS-FOLLOW',
        payload: {
            userId,
            isFollow
        }
    } as const
}


export const getRequestUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setSelectedPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        }
    )
}

const followUnfollowFlow = async (dispatch: any, userId:number, apiMethod: any, followUnfollow: boolean) => {
    dispatch(toggleIsFollow(userId, true))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) dispatch(getFollowUnfollow(userId, followUnfollow))
    dispatch(toggleIsFollow(userId, false))
}

export const follow = (userId: number): AppThunk => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.getFollow.bind(usersAPI),true)
}

export const unfollow = (userId: number):AppThunk => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.getUnfollow.bind(usersAPI), false)
}