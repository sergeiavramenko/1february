import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContecst";


const MyPostsConteiner = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let Click = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    }
                    return                    <MyPosts posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}
                             updateNewPostText={onPostChange} click={Click}/>
                } 
        }
        </StoreContext.Consumer>
    );
}
export default MyPostsConteiner;