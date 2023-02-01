import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://images.unsplash.com/photo-1670239509764-98c3d2c2d2ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </header>

    );
}
export default Header;