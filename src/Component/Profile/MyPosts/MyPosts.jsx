import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {


    let PostsElement = props.posts.map( ex => <Post message={ex.name} likesCount={ex.likesCount} /> )

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.amm(text);

}

    return (

        <div className={p.postsBlock}>
           <h3>My post </h3>
            <div> console.log({props.a})
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={addPost }>Add post</button>
                </div>


            </div>
            <div className={p.post}>
                {PostsElement}




            </div>
        </div>


    );
}
export default MyPosts;