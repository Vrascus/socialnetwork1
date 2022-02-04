import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navi from "./componets/Navi/Navi";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";

let SumeComponent = () => <Dialogs />

const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navi/>
            <div className='app-wrapper-content'>
                <Routes>
                <Route path="/dialogs" element={ <Dialogs dialogs={props.dialogs} messageData={props.messageData}/> }/>
                <Route path="/profile" element={ <Profile posts={props.posts} /> }/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    )

}


export default App;

