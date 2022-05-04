import React, {Fragment} from "react";
import c from './Profile.module.css';
import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";



const Profile = (props) => {


    return <>
        <div className='content'>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    </>
};
export default Profile;
