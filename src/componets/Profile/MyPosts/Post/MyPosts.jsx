import React from "react";
import c from './MyPosts.module.css';
import Post from "../Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ]

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
                <Post message={postData [0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData [1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>)
};
export default MyPosts;