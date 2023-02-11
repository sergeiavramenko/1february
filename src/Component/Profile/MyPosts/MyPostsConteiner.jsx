import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsConteiner = (props) => {
let state = props.store.getState();



    let Click = () => {

        props.dispatch(addPostActionCreator());


    }
    let onPostChange = (text) => {

        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (

      <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} click={Click}/>

    );
}
export default MyPostsConteiner;