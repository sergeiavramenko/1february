import React from "react";
import App from "../../App";
import d from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Massegeitem/Messageitem";
import AAA from "../../index";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialosData.map(dialog =>  <DialogItem nameProps={dialog.name} idprops={dialog.id}/>);
    let MessageElement = props.dialogsPage.messageData.map( message =>  <MessageItem messageProps={message.name}/>)
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