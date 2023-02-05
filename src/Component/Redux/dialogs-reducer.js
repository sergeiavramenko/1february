import state from "./State";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
 const dialogsReducer = (state , action) => {
    switch (action.type) {
        case SEND_MESSAGE :
        let body = state.newMessageBody;

        state.newMessageBody = "";
        state.messageData.push({ name:body, id:6})
            return state


    case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
            return state
        default:
            return  state;
}
}
export const updateNewMessageBodyCreator = (body) => {

    return(
        {type:UPDATE_NEW_MESSAGE_BODY , newText: body}
    )
}
export const sendMessageCreator = () => {

    return(
        {type: SEND_MESSAGE}
    )
}
export default dialogsReducer;