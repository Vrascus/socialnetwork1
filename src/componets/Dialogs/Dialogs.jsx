import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageBlock from "./Message/MissageBlock/MessageBlock";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = state.messageData.map( m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch (sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch (updateNewMessageBodyCreator(body));
    }


    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={c.messages}>
                    <div>{messagesElements}</div>
                    <div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Добавить</button>
                    </div>
                </div>
            </div>
            {/*<MessageBlock/>*/}
        </div>
    )
};

export default Dialogs;
