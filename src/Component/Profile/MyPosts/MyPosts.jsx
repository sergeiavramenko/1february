import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/State";



const MyPosts = (props) => {
let newMessageBod = props.posts.newPostText;

    const PostsElement = props.posts.map( ex => <Post message={ex.name} likesCount={ex.likesCount} /> )


    const Click = () => {

        props.dispatch(addPostActionCreator());


    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (

        <div className={p.postsBlock}>
            <h3>My post </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={newMessageBod} placeholder={"Enter"} />
                </div>
                <div>
                    <button onClick={Click }>Add post</button>
                </div>


            </div>
            <div className={p.post}>
                {PostsElement}




            </div>
        </div>


    );
}
export default MyPosts;