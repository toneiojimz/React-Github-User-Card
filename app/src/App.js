import React from 'react';
import styled from 'styled-components';

import Profile from './Components/Profile';
import Followers from './Components/Followers';

const User = styled.div`
  display: flex;
 
  align-items: center;
  heigth: 150px;
  flex-wrap: wrap;
`;

const Gi = styled.h1`
  display: flex;
  justify-content: center;
  background: lightgray;
  font-size: 4rem;
`;

function App (){
  return (
    <div>
      <Profile/>
      <Gi>Github</Gi>
    <User>
      <Followers/>
    </User>
    </div>
  )
}

export default App;
