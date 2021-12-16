import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const Dialogs = (props) => {
    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    <div className={c.dialog + ' ' + c.active}>
                        <NavLink to='/dialog/1'>Voper</NavLink>
                    </div>
                    <div className={c.dialog}>
                        <NavLink to='/dialog/2'>Suam</NavLink>
                    </div>
                    <div className={c.dialog}>
                        <NavLink to='/dialog/3'>Dimych</NavLink>
                    </div>
                    <div className={c.dialog}>
                        <NavLink to='/dialog/4'>Sveta</NavLink>
                    </div>
                    <div className={c.dialog}>
                        <NavLink to='/dialog/5'>Sasha</NavLink>
                    </div>

                </div>
                <div className={c.messages}>
                    <div className={c.message}>Hi</div>
                    <div className={c.message}>How is your IT</div>
                    <div className={c.message}>YO</div>
                </div>
            </div>

    </div>
    )
};

export default Dialogs;