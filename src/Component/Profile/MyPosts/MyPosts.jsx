import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {


    let PostsElement = props.posts.map( ex => <Post message={ex.name} likesCount={ex.likesCount} /> )

    let newPostElement = React.createRef();
    let Click = () => {

        props.dispatch({type: "ADD-POST"});


}




    let onPostChange = () => {
        let text = newPostElement.current.value;
               props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
}

    return (

        <div className={p.postsBlock}>
           <h3>My post </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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