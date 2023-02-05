import state from "./State";

const profileReducer = (state , action) => {
     if (action.type === ADD_POST) ;
        { let newPost = {name: this._state.profilePage.newPostText, id: "8", likesCount: 1};


            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } if (action.type === UPDATE_NEW_POST_TEXT) ;
        {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody;

            this._state.dialogPage.newMessageBody = "";
            this._state.dialogPage.dialosData.messageData.push({ name:body})
            this._callSubscriber(this._state);

        }  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);

    } else {
            return console.log(12);
        }






    return state;
}