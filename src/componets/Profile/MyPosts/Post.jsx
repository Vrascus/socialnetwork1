import React from "react";
import c from './Post.module.css';

const Post = () => {
    return <>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={c.posts}>
                    <div className={c.item} >
                        <img src='https://javasea.ru/uploads/posts/2018-10/1540846392_anubis-i-umershie.jpg'/>
                        post 1
                        <div>
                            <span>like</span>
                        </div>
                    </div>

                </div>
        <div className={c.posts}>
            <div className={c.item} >
                <img src='https://javasea.ru/uploads/posts/2018-10/1540846392_anubis-i-umershie.jpg'/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>

        </div>
        <div className={c.posts}>
            <div className={c.item} >
                <img src='https://javasea.ru/uploads/posts/2018-10/1540846392_anubis-i-umershie.jpg'/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>

        </div>
        <div className={c.posts}>
            <div className={c.item} >
                <img src='https://javasea.ru/uploads/posts/2018-10/1540846392_anubis-i-umershie.jpg'/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>

        </div>
        <div className={c.posts}>
            <div className={c.item} >
                <img src='https://javasea.ru/uploads/posts/2018-10/1540846392_anubis-i-umershie.jpg'/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>

        </div>
        <div className={c.posts}>
            <div className={c.item} >
                <img src='https://javasea.ru/uploads/posts/2018-10/1540846392_anubis-i-umershie.jpg'/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>

        </div>
        <div className={c.posts}>
            <div className={c.item} >
                <img src='https://javasea.ru/uploads/posts/2018-10/1540846392_anubis-i-umershie.jpg'/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>

        </div>
    </>
};
export default Post;