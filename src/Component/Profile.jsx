import React from "react";
import p from './Profile.module.css';

const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img src="https://images.unsplash.com/photo-1669993427076-3d9acc119413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
            </div>
            <div>
                ava + description
            </div>
            <div >
                My post
                <div >
                    New post </div>
                <div className={p.posts}>
                    <div className={p.item}>Post 1</div>
                    <div className={p.item}>Post 2</div>
                </div>
            </div>





        </div>

    );
}
export default Profile;