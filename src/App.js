import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";


const App = () => {

    return (
        /* <body background='FaceImg'></body>*/
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
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

