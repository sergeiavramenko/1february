import React from "react";
import p from './MyPosts.module.css';

const MyPosts = () => {
    return (
       
            <div >
                My post
                <div >
                    New post </div>
                <div>
                    <div className={ p.item }>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>

       

    );
}
export default MyPosts;