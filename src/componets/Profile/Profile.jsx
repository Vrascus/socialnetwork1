import React, {Fragment} from "react";
import c from './Profile.module.css';
import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return <>
        <div className='content'>
            <ProfileInfo />
            <MyPosts/>
        </div>
    </>
};
export default Profile;