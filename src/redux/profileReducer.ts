import {ProfilePageType, UserProfileType} from "./redux-store";
import {toggleIsFetching, ToggleIsFetchingACType} from "./userReducer";
import {usersAPI} from "../api/api";



const initialState : ProfilePageType =  {
    posts:[
        {id: 1,message: 'Hello, my name is Ilya', likeCount: 15},
        {id: 2,message: 'Im busy', likeCount: 20}
    ],
    newPostText: 'it-kamasutra',
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
    isFetching: false
}



export type UnionType = AddPostACType | UpdatePostACType | SetUserACType | ToggleIsFetchingACType




export const profileReducer = (state: ProfilePageType = initialState, action: UnionType): ProfilePageType => {
       switch (action.type) {
            case "ADD-POST": {
                    let newPost =  {id: 3,message: state.newPostText, likeCount: 0}
                    state.newPostText = ''
                    return {...state, posts: [newPost,...state.posts]}
            }
            case "UPDATE-POST": {
                return {...state, newPostText: action.payload.newText}
            }
           case "SET-USER": {
               return {...state, userProfile: action.payload.user}
           }
           case "TOGGLE-IS-FETCHING": {
               return {...state, isFetching: action.payload.isFetching}
           }


           default: return state
        }
}



export type AddPostACType = ReturnType<typeof addPost>
export const addPost = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export type UpdatePostACType = ReturnType<typeof updatePost>
export const updatePost = (newText: string) => {
    return {
        type: 'UPDATE-POST',
        payload: {
            newText
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


export const getProfile = (userId: number) => (dispatch: any) => {
        dispatch(toggleIsFetching(true))
            usersAPI.getProfile(userId)
            .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUser(data))
    })
}