import React from "react";
import c from './MyPosts.module.css';
import Post from "../Post";

const MyPosts = (props) => {

let postsElements =
    props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>);

let newPostElement = React.createRef();

let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
}

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={c.posts}>
                { postsElements }
            </div>
        </div>)
};
export default MyPosts;
