import React from "react";
import s from "./users.module.css";
import userPhoto from "../../userspng.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}


        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.Photo}
                             alt="sadas"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow${u.id}`,{  withCredentials: true, headers:{ "API-KEY": "a46f4d6f-2df4-4db1-9f4b-95204fad7d42"} })
                                    .then(response => {
                                        if ( response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow${u.id}`, {}, {withCredentials: true,headers:{ "API-KEY": "a46f4d6f-2df4-4db1-9f4b-95204fad7d42"} })

                                    .then(response => {
                                       if ( response.data.resultCode === 0) {

                                           props.follow(u.id)
                                       }
                                });




                            }}>Follow</button>

                        }

                    </div>
                </span>
                <span>
                    <span> <div>{u.name}</div>
                        <div>{u.status}</div></span>
                    <span> <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div></span>
                </span>

            </div>)

        }
    </div>
}
export default Users;