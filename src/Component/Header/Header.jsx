import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import n from "../NavBar/NavBar.module.css";
const Header = (props) => {
    return (
        <header className={classes.header}>


            <div className={classes.nav} >ddd
                {props.isAuth? props.login:
                <NavLink to="/profile" className = { navData => navData.isActive ? n.active : n.item }>Login</NavLink>} </div>
        </header>

    );
}


export default Header;