import React from "react";
import n from './NavBar.module.css';


const NavBar = (props) => {
    return (
    <div className={n.nav}> 
      <div className={n.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={ `${n.item} ${n.active} ` }>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={n.item}>
        <a>News</a>
      </div>
      <div className={n.item}>
        <a>Music</a>
      </div>
      <div className={n.item}>
        <a>Settings</a>
      </div>
   </div >
    );
}
export default NavBar;