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

  return (
    <BrowserRouter>
                <div className='app-wrapper'>
              <Header/>
              <NavBar/>


              <div className='app-wrapper-content'>
                  <Routes>
                        <Route path="/profile" element={<Profile  profilePage={props.appState.profilePage} amm={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.appState.dialogPage} />}/>
                      <Route path="/news" element={<News />}/>
                      <Route path="/music/" element={<Music music={props.appState.music}/>}/>
                      <Route path="/settings" element={<Settings />}/>


                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
