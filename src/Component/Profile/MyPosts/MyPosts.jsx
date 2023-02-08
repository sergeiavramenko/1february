import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";



const MyPosts = (props) => {


    let PostsElement = props.posts.map( ex => <Post message={ex.name} likesCount={ex.likesCount} /> )

    let newMessageBod = props.newPostText;
    let Click = () => {

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
                    <textarea onChange={onPostChange}  value={newMessageBod} />
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