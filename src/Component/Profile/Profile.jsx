import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";


const Profile = (props) => {

    return (
        <div>

            <ProfileInfo/>


            <MyPostsConteiner store={props.store}  dispatch={props.dispatch}/>


        </div>

    );
}
export default Profile;