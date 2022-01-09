import React from 'react';
import c from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/1' + props.id;

    return <div className={c.dialog + ' ' + c.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
export default DialogItem;