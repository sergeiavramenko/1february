import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div className={p.postsBlock}>
           <h3>My post</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>


            </div>
            <div className={p.post}>
                <Post message="Its my first post" let="Its the first page"/>
                <Post message="Its my first post" let="Its the second page"/>


            </div>
        </div>


    );
}
export default MyPosts;