import React, {Fragment} from "react";
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className='content'>
            <ProfileInfo profile={props.props} />
            <MyPostsContainer />
        </div>
    )
};
export default Profile;
