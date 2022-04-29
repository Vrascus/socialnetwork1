import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navi from "./componets/Navi/Navi";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import MessageBlock from "./componets/Dialogs/Message/MissageBlock/MessageBlock";


const App = (props) => {

    return (
        /* <body background='FaceImg'></body>*/
        <div className='app-wrapper'>
            <Header/>
            <Navi/>
            <div className='app-wrapper-content'>
                <Routes>
                <Route path="/dialogs"
                       element={ <Dialogs store={props.store} /> }
                />
                <Route path="/profile"
                       element={ <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                       /> }/>
                </Routes>
            </div>
        </div>

    )

}


export default App;

