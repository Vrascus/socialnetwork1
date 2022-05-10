const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [{
        id: 1,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcplypwN9kHolvQU6XdywpRmk-e5fN86g93w&usqp=CAU',
        followed: false,
        fullName: 'Voper',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus'}
    }, {
        id: 2,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcplypwN9kHolvQU6XdywpRmk-e5fN86g93w&usqp=CAU',
        followed: true,
        fullName: 'Suam',
        status: 'Good luck',
        location: {city: 'Minsk', country: 'Belarus'}
    }, {
        id: 3,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcplypwN9kHolvQU6XdywpRmk-e5fN86g93w&usqp=CAU',
        followed: false,
        fullName: 'Dimych',
        status: 'Yuo face my ass',
        location: {city: 'Moscow', country: 'Russia'}
    }, {
        id: 4,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcplypwN9kHolvQU6XdywpRmk-e5fN86g93w&usqp=CAU',
        followed: true,
        fullName: 'Sveta',
        status: '.....',
        location: {city: 'Kiev', country: 'Ukraine'}
    }, {id: 5,
        followed: true,
        fullName: 'Sasha',
        status: '.....sad',
        location: {city: 'Minsk',
            country: 'Belarus'}},

    ], newPostText: ''
};


const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default :
            return state;
    }
}

export const followAC = (userId) => (
    {type: FOLLOW, userId})
export const unfollowAC = (userId) => (
    {type: UNFOLLOW, userId})
export const setUsersAC = (users) => (
    {type: SET_USERS, users})

export default UsersReducer;
