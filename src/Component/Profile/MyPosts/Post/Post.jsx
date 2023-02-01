import React from "react";
import p from './Post.module.css';

const Post = () => {
    return (


        <div className={p.item}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/e/eb/Ralf_logo.jpg" />
            Post 1
            <div><span>Like</span></div>
            <div><span>DizLike</span></div>
        </div>



    );
}
export default Post;