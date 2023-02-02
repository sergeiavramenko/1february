import React from "react";
import d from "./Dialogitem.module.css"
import {NavLink} from "react-router-dom";
import Dialogs from "../Dialogs";

let DialogItem = (props) => {
    let path = "/dialogs/" + props.idprops;
    return (<div className={d.dialog}><NavLink to={path}className={navData => navData.isActive ? d.active : d.item}> {props.nameProps} </NavLink>
        </div>


    );
}

export default DialogItem;