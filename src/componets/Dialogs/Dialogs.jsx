import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Voper'},
        {id: 2, name: 'Suam'},
        {id: 3, name: 'Dimych'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Sasha'}
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'How is your IT'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'How do you need?'},
    ]

    let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = messageData.map( m => <Message message={m.message}/>);

    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={c.messages}>
                    { messagesElements }
                </div>
            </div>
        </div>)
};

export default Dialogs;