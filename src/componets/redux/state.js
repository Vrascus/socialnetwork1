let state;
state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11}
        ]
    },
    messagesPage: {
        messageData: [{id: 1, message: 'Hi'}, {id: 2, message: 'How are you?'}, {
            id: 3, message: 'How is your IT'
        }, {id: 4, message: 'YO'}, {id: 5, message: 'How do you need?'},],
        dialogs: [{id: 1, name: 'Voper'}, {id: 2, name: 'Suam'}, {id: 3, name: 'Dimych'}, {
            id: 4, name: 'Sveta'
        }, {id: 5, name: 'Sasha'}],
    },
    sidebar: {}

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push (newPost);
}

export default state;
