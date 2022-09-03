import React, {Fragment} from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className='Face'>
                <img src='https://p4.wallpaperbetter.com/wallpaper/83/597/79/fantasy-anubis-wallpaper-preview.jpg'/>
            </div>
            <div className={c.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
            </div>
    )
};
export default ProfileInfo;
