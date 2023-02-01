import React from "react";
import p from './Post.module.css';

const Post = (props) => {
    return (
        


        <div className={p.item}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/e/eb/Ralf_logo.jpg" />
           {props.message}
            <div><span> like</span> </div>
            <div><span>like</span></div>
            <div>
                {props.let}
            </div>




        </div> 



    );
}
export default Post; 