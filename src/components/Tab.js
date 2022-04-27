import styled from 'styled-components';
import React, {useState} from 'react';
import { Title } from '../App';

const TabContainer = styled("div")`
  width: 19.5em;
  margin: 50px auto;
`;
const TabMenu = styled.div`
  background-color: white;
  display: flex;
  list-style: none;

  .submenu {
    width:100% auto;
    padding: 15px 10px;
    cursor: pointer;
    flex: 1;
    text-align: center;
    border-bottom: 3px solid #f0f0f0;
  }
  .submenu.focused {
    font-weight: bold;
    border-bottom: 3px solid #5D9FED;
  }
`;

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: '감자' },
    { name: '고구마' },
    { name: '카레라이스' },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <TabContainer>
      <Title>2. Tab</Title>
      <TabMenu>
        {menuArr.map((ele, index)=>{
          return (
            <li
            key={index}
            className={currentTab === index ? "submenu focused" : "submenu"}
            onClick={()=> selectMenuHandler(index)}
          >
            {ele.name}
          </li>
            )
        })}
      </TabMenu>
    </TabContainer>
  )
}

export default Tab