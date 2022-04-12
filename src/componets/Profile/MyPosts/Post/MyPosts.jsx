import React from "react";
import c from './MyPosts.module.css';
import Post from "../Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/state";



const MyPosts = (props) => {

let postsElements =
    props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>);

let newPostElement = React.createRef();

let addPost = () => {

    props.dispatch(addPostActionCreator());

}

let onPostChange= () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator (text);
    props.dispatch(action);
}

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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
