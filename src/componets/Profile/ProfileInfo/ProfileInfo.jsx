import React, {Fragment} from "react";
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className='Face'>
                <img src='![](Face.png)'/>
             {/*  https://99px.ru/sstorage/53/2017/03/mid_195563_2531.jp*/}
            </div>
            <div className={c.descriptionBlock}>
                ava+description
            </div>
            </div>
    )
};
export default ProfileInfo;
