 const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
 const SEND_MESSAGE = 'SEND-MESSAGE';

 let initialState = {
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
 };


const dialogsReducer =(state= initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;

 export const sendMessageCreator = () => ({type : SEND_MESSAGE})
 export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body})
