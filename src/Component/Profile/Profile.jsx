import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import p from './Profile.module.css';



const Profile = () => {
    return (
        <div >
            <div>
                <img src="https://images.unsplash.com/photo-1669993427076-3d9acc119413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
            <MyPosts />
            <MyPosts />
            <MyPosts />
            <MyPosts />
            <MyPosts />
            <MyPosts />





        </div>

    );
}
export default Profile;