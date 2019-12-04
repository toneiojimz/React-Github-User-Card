import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';

class Followers extends React.Component {
    state = {
        followers:[]
    };

    componentDidMount(){
        axios.get("https://api.github.com/users/toneiojimz/followers")
            .then(response => {
                this.setState({ followers: response.data });
            })
            .catch (err => {
                console.log('something went wrong', error)
            })
    }

    render(){
        const { followers} = this.state;

        return (
            followers.map(follower =>{
                const { id } = follower;
                return (
                    <UserCard key={id} user={follower }/>
                )
            })
        )
    }
}
export default Followers;