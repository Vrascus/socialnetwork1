import React, {Fragment} from "react";
import c from './Profile.module.css';
import MyPosts from './MyPosts/Post/MyPosts';

const Profile = () => {
    return <>
        <div className='content'>
            <div >
                <img src='https://cdn.pixabay.com/photo/2019/09/18/21/12/dark-4487690_960_720.jpg'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    </>
};
export default Profile;