import React from "react";
import c from './MyPosts.module.css';
import Post from "../Post";

const MyPosts = (props) => {

let postsElements =
    props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>);

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={c.posts}>
                { postsElements }
            </div>
        </div>)
};
export default MyPosts;