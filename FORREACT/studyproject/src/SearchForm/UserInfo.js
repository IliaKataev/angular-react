import React from "react";

export default function UserInfo(props) {
    //if (typeof props.login === "undefined")
        //return <h2>No such user</h2>
    return(
        <div>
            <h2>Login: {props.login}</h2>
            <h2>Name: {props.name}</h2>
            <h2>Follower: {props.followers}</h2>
            <img src={props.avatar_url} alt="avatar" width="200"/>
        </div>
    )
}