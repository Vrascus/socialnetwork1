import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navi from "./componets/Navi/Navi";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navi/>
            <div className='app-wrapper-content'>
                <Dialogs/>

            </div>
            {/*<Profile/>*/}

        </div>
    );

}


export default App;

