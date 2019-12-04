import React from 'react';
import styled from 'styled-components';

const Pic = styled.img`
    width: 220px;
    heigth: 220px;
`;

const User = styled.div`
    border:3px solid orange;
    margin: 5px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`;

const UserCard = (props) => {
    const {
        avatar_url,
        url,
        bio } = props.user;

        return (
            <User>
                <Pic src={avatar_url} alt='profile picture'/>
                <p>Github: {url}</p>
                <p>Bio: {bio}</p>
            </User>
        )
}

export default UserCard;