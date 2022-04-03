import React from 'react';
import c from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/1' + props.id;

    return <div className={c.dialog + ' ' + c.active}>
        <div className={c.item}>
        <img src='https://javasea.ru/uploads/posts/2018-10/1540846392_anubis-i-umershie.jpg'/>
        <NavLink to={path}>{props.name}</NavLink>
        </div>
    </div>
}
export default DialogItem;
