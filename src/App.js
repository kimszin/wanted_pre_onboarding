import styled from 'styled-components';
import React from 'react';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Input from './components/Input';
import Dropdown from './components/Dropdown';

const Main = styled("div")`
  font-family: sans-serif;
  background: #ffffff;
  height: 100vh;
`;

export const Title = styled("div")`
  font-weight: 500;
  margin-bottom: 10px;
`;

function App() {
  return (
    <Main>
      <h2 style={{textAlign:'center'}}>wanted pre-onboarding assignment</h2>
      <Toggle />
      <Tab />
      <Input />
      <Dropdown />
    </Main>
  );
}

export default App;
