import React from "react";
import c from './MyPosts.module.css';
import Post from "../Post";

const MyPosts = () => {
    return <>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={c.posts}>
                    <Post message='Hi, how are you?' />
                    <Post message="It's my first post"/>
                </div>
    </>
};
export default MyPosts;