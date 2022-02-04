import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11}
]
let dialogs = [
    {id: 1, name: 'Voper'},
    {id: 2, name: 'Suam'},
    {id: 3, name: 'Dimych'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Sasha'}
]
let messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'How is your IT'},
    {id: 4, message: 'YO'},
    {id: 5, message: 'How do you need?'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
