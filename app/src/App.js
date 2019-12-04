import React from 'react';

import Profile from './Components/Profile';
import Followers from './Components/Followers';

function App (){
  return (
    <div className="App">
      <h1>Github Users</h1>
      <Profile/>
      <Followers/>
    </div>
  )
}

export default App;
