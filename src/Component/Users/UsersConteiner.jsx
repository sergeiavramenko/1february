import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../Redux/profile-reducer";
import {connect} from "react-redux";


import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../Redux/users-reducer";
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

    }
}

const usersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);
export default usersConteiner