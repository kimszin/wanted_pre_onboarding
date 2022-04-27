import styled from 'styled-components';
import React, {useState} from 'react';
import { Title } from '../App';

const ToggleContainer = styled("div")`
  width: 19.5em;
  margin: 50px auto;
`;
const ToggleMenu = styled.div`
  background-color: white;
  border: 3px solid #f0f0f0;
  display: flex;
  list-style: none;

  .submenu {
    width:100% auto;
    height: auto;
    padding: 7px 2px;
    cursor: pointer;
    flex: 1;
    text-align: center;
    background-color: #f0f0f0;
    
  }
  .submenu.focused {
    font-weight: bold;
    background-color: #ffffff;
  }
`;

const Toggle = () => {
  const [currentToggle, setCurrentToggle] = useState(0);

  const menuArr = [
    { name: '기본' },
    { name: '상세' },
  ];

  const selectMenuHandler = (index) => {
    setCurrentToggle(index);
  };

  return (
    <ToggleContainer>
      <Title>1. Toggle</Title>
      <ToggleMenu>
        {menuArr.map((ele, index)=>{
          return (
            <li
              key={index}
              className={currentToggle === index ? "submenu focused" : "submenu"}
              onClick={()=> selectMenuHandler(index)}
            >
              {ele.name}
            </li>
            )
        })}
      </ToggleMenu>
    </ToggleContainer>
  )
}

export default Toggle