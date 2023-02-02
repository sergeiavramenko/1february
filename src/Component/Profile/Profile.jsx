import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
   /* let posts = [
        {name:"Dimasdasdasd", id:"1",likesCount:112},
        {name:"Andr", id:"2",likesCount:90},
        {name:"Andr", id:"2",likesCount:30},
        {name:"Andr", id:"2",likesCount:1},
        {name:"Andr", id:"2",likesCount:18}
    ]*/
    return (
        <div>

            <ProfileInfo/>


            <MyPosts posts={props.posts} />


        </div>

    );
}
export default Profile;