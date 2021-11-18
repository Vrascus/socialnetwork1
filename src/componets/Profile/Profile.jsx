import React from "react";
import c from './Profile.module.css';
import Post from "./MyPosts/Post";

const Profile = () => {
    return <>
        <div className='content'>
            <div className={c.content}>
                <img src='https://cdn.pixabay.com/photo/2019/09/18/21/12/dark-4487690_960_720.jpg'/>
            </div>
            <div>
                ava+description
            </div>
          <Post />
        </div>
    </>
};
export default Profile;