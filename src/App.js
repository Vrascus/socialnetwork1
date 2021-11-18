import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import Navi from "./componets/Navi/Navi";
import Profile from "./componets/Profile/Profile";

const App = () => {
  return (
      <div className='app-wrapper'>
          <Header/>
          <Navi/>
          <Profile/>
      </div>
          );

}


export default App;

