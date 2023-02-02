import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {name:"Ddaasf", id:"1",likesCount:112},
        {name:"Aasdasdas", id:"2",likesCount:90},
        {name:"Aasda", id:"2",likesCount:30},
        {name:"rendea", id:"2",likesCount:1},
        {name:"pupipupi", id:"2",likesCount:18},
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