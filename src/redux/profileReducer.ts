import {ProfilePageType, UserProfileType} from "./redux-store";
import {toggleIsFetching, ToggleIsFetchingACType} from "./userReducer";
import {profileAPI, usersAPI} from "../api/api";



const initialState : ProfilePageType =  {
    posts:[
        {id: 1,message: 'Hello, my name is Ilya', likeCount: 15},
        {id: 2,message: 'Im busy', likeCount: 20}
    ],
    userProfile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId:  0,
        photos: {
            small: '',
            large: ''},
    },
    status: '',
    isFetching: false
}



export type UnionType = AddPostACType | SetUserACType | ToggleIsFetchingACType | GetStatusACType |
    SetUserStatusType


export const profileReducer = (state: ProfilePageType = initialState, action: UnionType): ProfilePageType => {
       switch (action.type) {
            case "ADD-POST": {
                    let newPost =  {id: 3,message: action.payload.newMessageBody, likeCount: 0}
                    return {...state, posts: [newPost,...state.posts]}
            }
           case "SET-USER": {
               return {...state, userProfile: action.payload.user}
           }
           case "TOGGLE-IS-FETCHING": {
               return {...state, isFetching: action.payload.isFetching}
           }
           case "GET-STATUS": {
               return {...state, status: action.payload.statusText}
           }
           case "SET-STATUS": {
               return {...state, status: action.payload.status}
           }

           default: return state
        }
}



export type AddPostACType = ReturnType<typeof addPost>
export const addPost = (newMessageBody: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            newMessageBody
        }
    } as const
}

export type SetUserACType = ReturnType<typeof setUser>
export const setUser = (user: UserProfileType) => {
    return {
        type: 'SET-USER',
        payload: {
                user
        }
    } as const
}


export type GetStatusACType = ReturnType<typeof getUserStatus>
export const getUserStatus = (statusText: string) => {
    return {
        type: 'GET-STATUS',
        payload: {
            statusText
        }
    } as const
}


export type SetUserStatusType = ReturnType<typeof setUserStatus>
export const setUserStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        payload: {
            status
        }
    } as const
}

export const getProfile = (userId: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUser(data))
        })
}


// export const getStatus = (userId: number) => (dispatch: any) => {
//     profileAPI.getStatus(userId).then(status => {
//         dispatch(getUserStatus(status))
//     })
// }
//
// }
export const getStatus =  (userId: number) => async (dispatch: any) => {
      const status = await profileAPI.getStatus(userId)
      dispatch(getUserStatus(status))
 }

export const updateStatus = (status: string) => (dispatch: any) => {

    profileAPI.updateStatus(status).then(response => {
        debugger
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })


}