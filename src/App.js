import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import NavBar from './Component/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import Settings from "./Component/Settings/Settings";
import DialogsConteiner from "./Component/Dialogs/DialogsConteiner";
import UsersConteiner from "./Component/Users/UsersConteiner";
import ProfileConteiner from "./Component/Profile/ProfileConteiner";
import HeaderContainer from "./Component/Header/HeaderContainer";


function App(props) {

  return (
    <BrowserRouter>
                <div className='app-wrapper'>
              <HeaderContainer/>
              <NavBar/>


              <div className='app-wrapper-content'>
                  <Routes>
                        <Route path="/profile/*" element={<ProfileConteiner   />}/>
                      <Route path="/users" element={<UsersConteiner/> }/>
                        <Route path="/dialogs/*" element={<DialogsConteiner   />}/>
                      <Route path="/news" element={<News />}/>
                      <Route path="/music/" element={<Music />}/>
                      <Route path="/settings" element={<Settings />}/>


                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
