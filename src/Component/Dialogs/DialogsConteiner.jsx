import React from "react";


import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsConteiner = (props) => {
let state = props.store.getState().dialogsPage;

   let onMessageClick = () => {
       props.store.dispatch(sendMessageCreator())
   }
   let onNewMessageChange = (body) => {

   props.store.dispatch(updateNewMessageBodyCreator(body))
   }

    return (

     <Dialogs dialogsPage={state} updateNewMessageBody={onNewMessageChange} sendMessage={onMessageClick} />
    );
}
export default DialogsConteiner;