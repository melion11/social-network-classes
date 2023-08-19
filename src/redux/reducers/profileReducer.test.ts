import {addPost, ProfilePageType, profileReducer} from './profileReducer';


describe('Profile reducer tests', () => {
    let state: ProfilePageType;

    beforeEach(() => {
        state = {
            posts: [
                {id: 1, message: 'Hello, my name is Ilya', likeCount: 15},
                {id: 2, message: 'Im busy', likeCount: 20},
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
                userId: 0,
                photos: {
                    small: '',
                    large: '',
                },
            },
            status: ''
        };
    });

    test('new post should be added', () => {
        const newState = profileReducer(state, addPost('title'));

        expect(newState.posts.length).toBe(3);
        expect(newState.posts[0].message).toBe('title');
        expect(newState.posts[0].id).toBe(3);
        expect(newState.posts[0].likeCount).toBe(0);
    });
});