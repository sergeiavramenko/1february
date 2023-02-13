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
import DialogsConteiner from "./Component/Dialogs/DialogsConteiner";

function App(props) {

  return (
    <BrowserRouter>
                <div className='app-wrapper'>
              <Header/>
              <NavBar/>


              <div className='app-wrapper-content'>
                  <Routes>
                        <Route path="/profile" element={<Profile   />}/>
                        <Route path="/dialogs/*" element={<DialogsConteiner   />}/>
                      <Route path="/news" element={<News />}/>
                      <Route path="/music/" element={<Music dispatch={props.dispatch} music={props.store.getState().music }/>}/>
                      <Route path="/settings" element={<Settings />}/>


                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
