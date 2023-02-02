import React from "react";
import d from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


let DialogItem = (props) => {
let path = "/dialogs/" + props.id;
    return (<div className={d.dialog}> <NavLink to={path} className={navData => navData.isActive ? d.active : d.item}> {props.name} </NavLink> </div>


    );
}
let Message = (props) => {

    return (
        <div className={d.message}>{props.m}</div>

    );
}
const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>

                <DialogItem name="Dim" id="1"/>
                <DialogItem name="Andr" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Kirill" id="5"/>
                <DialogItem name="Olga" id="6"/>

                 </div>
            <div className={d.messages}>
                <Message m="How are you"/>
                <Message m="Im ok"/>
                <Message m="Good"/><Message m="Good"/><Message m="Good"/>

            </div>
        </div>

    );
}
export default Dialogs;