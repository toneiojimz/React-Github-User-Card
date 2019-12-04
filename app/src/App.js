import React from 'react';
import logo from './logo.svg';
import axios from 'axios';

 class App extends React.Component{

    state ={
      followers: [],
      followerText:''
    };
    
    componentDidMount(){
      
      axios.get(`https://github.com/toneiojimz`)
        .then(response =>{
          console.log(response);
          this.setState({followers: response.data.message});
        });
    }

    render(){
      return (
      <div className='App'>
        <h1>The Followers</h1>
        <div className='followers'>
          {this.state.followers.map( follower => (
            <img width='150' src={follower} key={follower} alt={follower} />
          ))}
        </div>
      </div>
      );
    }
 }
export default App;
