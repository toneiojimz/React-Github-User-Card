import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';

class Profile extends React.Component{
    state = { user: null};

    componentDidMount(){
        axios.get("https://api.github.com/users/toneiojimz")
            .then (response => {
                this.setState({ user: response.data})
            })
            .catch(error =>{
                console.log('does not work', error);
            })
    }

    render(){
        const {user} = this.state;

        if (user === null){
            return <div>Loading information now......</div>
        }
        return (
            <UserCard user={user}/>
        )
    }
}

export default Profile;