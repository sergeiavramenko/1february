import React from "react";
import d from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Massegeitem/Messageitem";


const Dialogs = (props) => {
    let dialosData = [
        {name: "Dim", id: "1"},
        {name: "Andr", id: "2"},
        {name: "Sveta", id: "3"},
        {name: "Sasha", id: "4"},
        {name: "Kirill", id: "5"},
        {name: "Olga", id: "6"},
        {name: "Sasha", id: "4"},
        {name: "Kirill", id: "5"},
        {name: "Olga", id: "6"}
    ];
    let messageData = [
        {name: "Hi, my frend"},
        {name: "Im ok"},
        {name: "Im ok"},
        {name: "Ich din du bist"},
        {name: "Im ok"},
        {name: "Im ok"},
        {name: "Ich din du bist"},
        {name: "Im ok"},
        {name: "Im ok"},
        {name: 12345 }];
    let dialogsElements = dialosData.map(dialog =>  <DialogItem nameProps={dialog.name} idprops={dialog.id}/>);
    let MessageElement = messageData.map( message =>  <MessageItem messageProps={message.name}/>)
    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {MessageElement}
            </div>
        </div>
    );
}
export default Dialogs;