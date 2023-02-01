import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div >
            My post
            <div >
               <textare>hggg </textare>
               <button>Add post</button>
               <button>Remove</button>
            </div> 
            <div className={p.post}>
                <Post message="Its my first post" let="Its the first page" />
                <Post message="Its my first post" let="Its the second page"/>
                
                
                
                
            </div>
        </div>



    );
}
export default MyPosts;