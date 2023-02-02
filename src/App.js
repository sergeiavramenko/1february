import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import NavBar from './Component/NavBar/NavBar';
import Profile from './Component/Profile/Profile';
import Dialogs from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import Settings from "./Component/Settings/Settings";

function App(props) {
    /*let posts = [
        {name:"Dimasdasdasd", id:"1",likesCount:112},
        {name:"Andr", id:"2",likesCount:90},
        {name:"Andr", id:"2",likesCount:30},
        {name:"Andr", id:"2",likesCount:1},
        {name:"Andr", id:"2",likesCount:18}
    ]*/
  return (
    <BrowserRouter>
                <div className='app-wrapper'>
              <Header/>
              <NavBar/>


              <div className='app-wrapper-content'>
                  <Routes>
                        <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs messageData={props.messageData} dialosData={props.dialosData}/>}/>
                      <Route path="/news" element={<News />}/>
                      <Route path="/music" element={<Music />}/>
                      <Route path="/settings" element={<Settings />}/>


                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
