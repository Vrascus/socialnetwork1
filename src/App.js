import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navi from "./componets/Navi/Navi";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";

let SumeComponent = () => <Dialogs />

const App = (props) => {
    console.log(props)

    return (
        <BrowserRouter>
            <body background='FaceImg'></body>
        <div className='app-wrapper'>
            <Header/>
            <Navi/>
            <div className='app-wrapper-content'>
                <Routes>
                <Route path="/dialogs"
                       element={ <Dialogs
                    state={props.state.messagesPage}/> }/>
                <Route path="/profile"
                       element={ <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                       /> }/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    )

}


export default App;

