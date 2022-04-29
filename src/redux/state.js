const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you?', likesCount: 12}, {
                id: 2, message: 'It\'s my first post', likesCount: 11
            }], newPostText: ''
        },
        messagesPage: {
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'How is your IT'},
                {id: 4, message: 'YO'},
                {id: 5, message: 'How do you need?'},
            ],

            dialogs: [
                {id: 1, name: 'Voper'},
                {id: 2, name: 'Suam'},
                {id: 3, name: 'Dimych'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Sasha'}
            ],
            newMessageBody: ""
        },
        sidebar: {}

    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } /*иначе,если*/else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.messagesPage.newMessageBody = action.body;
        } else if (action.type === 'SEND-MESSAGE') {
            let body =this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messageData.push({id: 6, message: body},);
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreator = () =>
{return {type: ADD_POST}}

export const updateNewPostActionCreator = (text) =>
    {return {type:UPDATE_NEW_POST_TEXT, newText: text}
        /*({type: UPDATE_NEW_POST_TEXT, newText: text})*/}
export const sendMessageCreator = () => ({type : SEND_MESSAGE})
export const updateNewMessageBody = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.state = store;