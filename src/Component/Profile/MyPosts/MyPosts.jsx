import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div >
            My post
            <div >
               <textare> </textare>
               <button>Add post</button>
               <button>Remove</button>
            </div>
            <div className={p.post}>
                <Post />
                <Post />
                
                <Post />
                
                
            </div>
        </div>



    );
}
export default MyPosts;