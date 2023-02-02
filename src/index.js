import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {name:"Dimasdasdasd", id:"1",likesCount:112},
    {name:"Andr", id:"2",likesCount:90},
    {name:"Andr", id:"2",likesCount:30},
    {name:"Andr", id:"2",likesCount:1},
    {name:"Andr", id:"2",likesCount:18}
] ;
let dialosData = [
    {name: "Dim", id: "1"},
    {name: "Andr", id: "2"},
    {name: "Sveta", id: "3"},
    {name: "Sasha", id: "4"},
    {name: "Kirill", id: "5"},
    {name: "Olga", id: "6"},
    {name: "Sasha", id: "4"},
    {name: "Kirill", id: "5"},
    {name: "Olga", id: "6"}
];
let messageData = [
    {name: "Hi, my frend"},
    {name: "Im ok"},
    {name: "Im ok"},
    {name: "Ich din du bist"},
    {name: "Im ok"},
    {name: "Im ok"},
    {name: "Ich din du bist"},
    {name: "Im ok"},
    {name: "Im ok"},
    {name: 12345 }];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialosData={dialosData} messageData={messageData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
