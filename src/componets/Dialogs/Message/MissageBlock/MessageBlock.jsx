// import c from "../../Dialogs.module.css";
// import React from "react";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/state";
// debugger;
// const MessageBlock = (props) =>{
//
//     let state = props.store.getState().messagesPage;
//
//     let newMessageBody = state.newMessageBody;
//
//     let onSendMessageClick = () => {
//         props.store.dispatch (sendMessageCreator());
//     }
//     let onNewMessageChange = (e) => {
//         let body = e.target.value;
//         props.store.dispatch (updateNewMessageBodyCreator(body));
//     }
//
//
//
//
//
//
//
//
//
//     return(
//         <div>
//             <div>
//                 <textarea value={newMessageBody}
//                           onChange={onNewMessageChange}
//                           placeholder='Enter your message'></textarea>
//             </div>
//             <div>
//                 <button onClick={ onSendMessageClick }>Добавить</button>
//             </div>
//         </div>
//
//     )
//
//
// };
//
// export default MessageBlock;
//
