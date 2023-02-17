import state from "./State";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
 let initialState ={
     posts: [
         {name: "Dimasdasdasd", id: "1", likesCount: 112},
         {name: "Andr", id: "2", likesCount: 90}
     ],
     newPostText: "IT-Incubato"
 }


const profileReducer = (state = initialState , action) => {
   switch (action.type) {
       case ADD_POST: {
           let newPost = {name: state.newPostText, id: "8", likesCount: 1};

           return {
               ...state,
               posts: [...state.posts, newPost],
               newPostText: ""
           };

       }
       case UPDATE_NEW_POST_TEXT: {

          return {
              ...state,
              newPostText: action.newPostText
          }

   }
       default:
       return state;


       }
}

export const addPostActionCreator = () => {

    return(
        {type: ADD_POST}
    )
}
export const updateNewPostTextActionCreator = (text) => {

    return(
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
}
export default profileReducer;






