import React from "react";
import c from './Navi.module.css';


const Navi = () => {
    return<>
        <nav className={c.navi}>
            <div className={c.item}>
                <a href="/profile"> Profile</a>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <a href="/missages"> Missages</a>
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