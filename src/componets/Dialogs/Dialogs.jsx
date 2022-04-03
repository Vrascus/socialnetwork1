import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MissageBlock from "./Message/MissageBlock/MissageBlock";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messageData.map( m => <Message message={m.message}/>);



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
            <MissageBlock/>


        </div>)
};

export default Dialogs;
