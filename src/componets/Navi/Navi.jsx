import React from "react";
import c from './Navi.module.css';

let c1 = "item";
let c2 = "active";
let classes = c1 + " " +c2;
let classesNew = `${c.item} ${c.active}`;
const Navi = () => {
    return<>
        <nav className={c.navi}>
            <div className={c.item}>
                <a> Profile</a>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <a> Missages</a>
            </div>
            <div className={c.item}>
                <a>News</a>
            </div>
            <div className={c.item}>
                <a>Music</a>
            </div>
            <div className={c.item}>
                Settings
            </div>
        </nav>
    </>
};

export default Navi;