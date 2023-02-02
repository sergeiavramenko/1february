import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {name:"Dim", id:"1",likesCount:112},
        {name:"Andr", id:"2",likesCount:90},
        {name:"Andr", id:"2",likesCount:30},
        {name:"Andr", id:"2",likesCount:1},
        {name:"Andr", id:"2",likesCount:18},
    ];

    let PostsElement = postsData.map( ex => <Post message={ex.name} likesCount={ex.likesCount} /> )

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
                {PostsElement}




            </div>
        </div>


    );
}
export default MyPosts;