import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>

            <ProfileInfo/>


            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} amm={props.amm} updateNewPostText={props.updateNewPostText}/>


        </div>

    );
}
export default Profile;