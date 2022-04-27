import styled from 'styled-components';
import React, {useState} from 'react';
import { Title } from '../App';
import { faEye, faEyeSlash, faCircleCheck as circleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck as circle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputContainer = styled("div")`
  width: 19.5em;
  margin: 50px auto;
`;

const Input = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPssword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [EmailValid, setEmailValid] = useState(false);

  const isEmail = (email) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

    return emailRegex.test(email);
  };

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
    if (isEmail(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }
  const onPasswordHandler = (e) => {
    setPssword(e.target.value);
  }
  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <InputContainer>
      <Title>3. Input</Title>
      <div style ={{display : 'flex', width : '100%'}}>
        <form style ={{display : 'flex', flexDirection:'column', width:'200px',
        backgroundColor:'#f0f0f0', padding:'10px'}}>
          <label>Email</label>
          <div style={{marginBottom:'13px'}}>
            <input type = "email" value = {Email} onChange={onEmailHandler}
            placeholder="E-mail" style={{width:'160px', marginRight:'5px'}}/>
            <span>
              { EmailValid 
              ? <FontAwesomeIcon icon={circle} /> 
              : <FontAwesomeIcon icon={circle} style={{color:'#C0C0C0'}} />}
            </span>
          </div>
          <label>Password</label>
          <div>
            <input type = { passwordVisible ? 'text' : 'password'} 
            value = {Password} onChange={onPasswordHandler}
            placeholder="Password" style={{width:'160px', marginRight:'5px'}}/>
            <span onClick={handlePasswordVisible}>
              { passwordVisible
              ? <FontAwesomeIcon icon={faEye} style={{cursor:'pointer'}} /> 
              : <FontAwesomeIcon icon={faEyeSlash} style={{cursor:'pointer'}} />}
            </span>
          </div>
        </form>
      </div>
    </InputContainer>
  )
}

export default Input