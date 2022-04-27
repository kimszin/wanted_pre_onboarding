import styled from 'styled-components';
import React, {useState} from 'react';
import { Title } from '../App';

const DropDownContainer = styled("div")`
  width: 19.5em;
  margin: 50px auto;
`;

const DropDownHeader = styled("div")`
  width: 6em;
  margin-bottom: 0.8em;
  padding: 0.4em 1em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #f0f0f0;
  cursor: pointer;
`;

const DropDownListContainer = styled("div")`
  width: 8em;
`;

const DropDownList = styled("ul")`
  width: 8em;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #f0f0f0;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  padding-bottom: 0.8em;
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;

const options = ["apple","orange","melon","banana","peach","blueberry"];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  }

  return (
    <DropDownContainer>
      <Title>4. Dropdown</Title>
      <DropDownHeader onClick={toggling} style={{display:"flex"}}>
        <span style={{flex:8}}>{selectedOption || "apple"}</span>
        <span style={{flex:1}}>▾</span></DropDownHeader>
      {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default Dropdown