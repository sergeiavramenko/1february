import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import NavBar from './Component/NavBar/NavBar';
import Profile from './Component/Profile/Profile';
import Dialogs from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

function App(props) {
  return (
    <BrowserRouter>
    
                 
                <div className='app-wrapper'>
              <Header/>
              <NavBar/>

              <div className='app-wrapper-content'>
                  <Routes>

                        <Route path="/profile" element={<Profile />}/> 
                        <Route path="/dialogs" element={<Dialogs />}/>
                     </Routes>
                                      





              </div>


          </div>
      
      </BrowserRouter>    
                        

  );
}

export default App;
