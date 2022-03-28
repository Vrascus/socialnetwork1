import React, {Fragment} from "react";
import c from './Profile.module.css';
import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {


    return <>
        <div className='content'>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </div>
    </>
};
export default Profile;
