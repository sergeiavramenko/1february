import React from "react";

import pi from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>

            <div className={pi.img}>
                <img
                    src="https://images.unsplash.com/photo-1669993427076-3d9acc119413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            </div>
            <div className={pi.descriptionBlock}>
                ava + description
            </div>

        </div>

    );
}
export default ProfileInfo;