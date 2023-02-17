import React from "react";
import styles from './users.moule.css'
let Users = (props) => {
    if (props.users.length === 0) {
    props.setUsers([
        {
            id: 1,
            photoUrl: "https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg",
            followed: true,
            fullName: "Sergei",
            status: "im from bel",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 1,
            photoUrl: "https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg",

            followed: false,
            fullName: "ddsfds",
            status: "imzzzz from bel",
            location: {city: "Minsdfdssk", country: "22Bsw22elarus"}
        },
        {
            id: 1,
            photoUrl: "https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg",

            followed: true,
            fullName: "dsfsdfds",
            status: "izxczxm from bel",
            location: {city: "Mindsdssk", country: "1111Belarus"}
        },
        {
            id: 1,
            photoUrl: "https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg",

            followed: false,
            fullName: "zxzxSergei",
            status: "i11111m from bel",
            location: {city: "Mdsfdsinsk", country: "4555Belarus"}
        } ])
    }
    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div> <img src={u.photoUrl} className={styles.userPhoto} alt="sadas"/></div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {props.unfollow(u.id)} } >Unfollow</button> :
                            <button onClick={() => {props.follow(u.id)} } >Follow</button>

                        }

                    </div>
                </span>
                <span>
                    <span> <div>{u.fullName}</div>
                        <div>{u.status}</div></span>
                    <span> <div>{u.location.city}</div>
                        <div>{u.location.country}</div></span>
                </span>

            </div>)

        }
    </div>
}
export default Users