import React, {Fragment} from "react";
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className='Face'>
                <img src='https://p4.wallpaperbetter.com/wallpaper/83/597/79/fantasy-anubis-wallpaper-preview.jpg'/>
            </div>
            <div className={c.descriptionBlock}>
                ava+description
            </div>
            </div>
    )
};
export default ProfileInfo;
