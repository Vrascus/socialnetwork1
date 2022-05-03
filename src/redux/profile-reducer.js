 const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
 const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [{id: 1, message: 'Hi, how are you?', likesCount: 12}, {
        id: 2, message: 'It\'s my first post', likesCount: 11
    }], newPostText: ''
};



const profileReducer =(state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, message: state.newPostText, likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default :
            return state;
    }
}

export default profileReducer;

 export const addPostActionCreator = () => ({type: ADD_POST})

 export const updateNewPostActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText: text})
 /*({type: UPDATE_NEW_POST_TEXT, newText: text})*/
