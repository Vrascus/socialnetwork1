import React from "react";
import c from './Navi.module.css';
import {NavLink} from "react-router-dom";


const Navi = () => {
    return<>
        <nav className={c.navi}>
            <div className={c.item}>
                <NavLink exact to="/profile">Profile</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <a href="/dialogs"> Missages</a>
            </div>
            <div className={c.item}>
                <a href="/news">News</a>
            </div>
            <div className={c.item}>
                <a href="/music">Music</a>
            </div>
            <div className={c.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    </>
};

export default Navi;