import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you?', likesCount: 12}, {
                id: 2, message: 'It\'s my first post', likesCount: 11
            }], newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Voper'},
                {id: 2, name: 'Suam'},
                {id: 3, name: 'Dimych'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Sasha'}
            ],

            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'How is your IT'},
                {id: 4, message: 'YO'},
                {id: 5, message: 'How do you need?'},
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}





export default store;
window.store = store;
