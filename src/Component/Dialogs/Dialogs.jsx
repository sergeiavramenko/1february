import React from "react";
import App from "../../App";
import d from "./Dialogs.module.css"

import DialogItem from "./Dialogitem/Dialogitem";
import MessageItem from "./Massegeitem/Messageitem";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";



const Dialogs = (props) => {
let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialosData.map(dialog =>  <DialogItem nameProps={dialog.name} idprops={dialog.id}/>);
    let MessageElement = state.messageData.map( message =>  <MessageItem messageProps={message.name}/>);
    let newMessageBody = state.newMessageBody;
   let onMessageClick = () => {
       props.store.dispatch(sendMessageCreator())
   }
   let onNewMessageChange = (e) => {
   let body = e.target.value;
   props.store.dispatch(updateNewMessageBodyCreator(body))
   }

    return (

        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                <div>{MessageElement}</div>


            </div>
            <div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={"Enter"}> </textarea></div>
                <div><button onClick={ onMessageClick  }   >Send</button></div>
            </div>
        </div>
    );
}
export default Dialogs;