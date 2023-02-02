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
    let dialosData = [
        {name:"Dim", id:"1"},
        {name:"Andr", id:"2"},
        {name:"Sveta", id:"3"},
        {name:"Sasha", id:"4"},
        {name:"Kirill", id:"5"},
        {name:"Olga", id:"6"}
    ];
    let messageData = [
        {name:"Hi, my frend"},
        {name:"Im ok"},

    ];

    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>

                <DialogItem name={dialosData[0].name} id={dialosData[0].id}/>
                <DialogItem name="Andr" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Kirill" id="5"/>
                <DialogItem name="Olga" id="6"/>

                 </div>
            <div className={d.messages}>
                <Message m={messageData[1].name}/>
                <Message m={messageData[0].name}/>


            </div>
        </div>

    );
}
export default Dialogs;