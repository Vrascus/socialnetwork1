import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navi from "./componets/Navi/Navi";
import Profile from "./componets/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import MessageBlock from "./componets/Dialogs/Message/MissageBlock/MessageBlock";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        /* <body background='FaceImg'></body>*/
        <div className='app-wrapper'>
            <Header/>
            <Navi/>
            <div className='app-wrapper-content'>
                <Routes>
                <Route path="/dialogs"
                       element={ <DialogsContainer store={props.store} /> }
                />
                <Route path="/profile"
                       element={ <Profile store={props.store}
                       /> }/>
                </Routes>
            </div>
        </div>

    )

}


export default App;

