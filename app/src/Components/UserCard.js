import React from 'react';

const UserCard = (props) => {
    const {
        avatar_url,
        id, 
        name,
        login,
        location, 
        url,
        followers,
        bio } = props.user;

        return (
            <div>
                <img src={avatar_url} alt='profile picture'/>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
                <p>Username: {login}</p>
                <p>Location: {location}</p>
                <p>Github: {url}</p>
                <p>Followers: {followers}</p>
                <p>Bio: {bio}</p>
            </div>
        )
}

export default UserCard;