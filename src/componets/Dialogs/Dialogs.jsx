import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messageData.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={c.messages}>
                    <div>{messagesElements}</div>
                    <div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Добавить</button>
                    </div>
                </div>
            </div>
            {/*<MessageBlock/>*/}
        </div>)
};

export default Dialogs;
