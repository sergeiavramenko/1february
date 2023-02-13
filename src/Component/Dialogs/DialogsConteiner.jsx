import React from "react";


import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContecst";



const DialogsConteiner = (props) => {


    return (

        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let onMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }
                    return             <Dialogs dialogsPage={state}
                             updateNewMessageBody={onNewMessageChange}
                             sendMessage={onMessageClick} />
                }
            }
        </StoreContext.Consumer>
    );
}
export default DialogsConteiner;