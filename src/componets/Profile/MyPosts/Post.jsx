import React from "react";
import c from './Post.module.css';

const Post = (props) => {

    return (
        <div>
                <div className={c.posts}>
                    <div className={c.item} >
                        <img src='https://javasea.ru/uploads/posts/2018-10/1540846392_anubis-i-umershie.jpg'/>
                        { props.message }
                        <div>
                            <span>like</span>
                        </div>
                    </div>
                </div>
        </div>
    )
};
export default Post;