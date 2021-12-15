import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navi from "./componets/Navi/Navi";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navi/>
            <div className='app-wrapper-content'>
               <Route component={Dialogs}/>
               <Route component={Profile}/>
            </div>
        </div>
        </BrowserRouter>
    );

}


export default App;

