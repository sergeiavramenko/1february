import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {name:"Dim", id:"1",likesCount:0},
        {name:"Andr", id:"2",likesCount:0},
        {name:"Sveta", id:"3"},
        {name:"Sasha", id:"4"},
        {name:"Kirill", id:"5"},
        {name:"Olga", id:"6"}
    ];
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
                <Post message={postsData[0].name} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].name} likesCount={postsData[1].likesCount}  />


            </div>
        </div>


    );
}
export default MyPosts;