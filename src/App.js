import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navi from "./componets/Navi/Navi";
import Profile from "./componets/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import MessageBlock from "./componets/Dialogs/Message/MissageBlock/MessageBlock";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";


const App = () => {

    return (
        /* <body background='FaceImg'></body>*/
        <div className='app-wrapper'>
            <Header/>
            <Navi/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs"
                           element={<DialogsContainer/>}/>
                    <Route path="/profile"
                           element={<Profile/>}/>
                    <Route path="/users"
                           element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>

    )

}


export default App;

