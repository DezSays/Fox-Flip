
import React  from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const Login = ({setNavbarState}) => {
  const [host, setHost] = useState(false)
  const [user, setUser] = useState(false)
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeHost = async (event) => {
    setHost(event.target.checked)
  }
  const handleChangeUser = async (event) => {
    setUser(event.target.checked)
  }
  const handleLogin = async (event) => {
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    
    console.log({
      userName: data.get('userName'), 
      password: data.get('password'),
      user: user,
      host: host
    })
    if(host === null && user === false){
      setErrorMessage('Please select Host or User to continue');
    }
    else{
      setErrorMessage('')
      const response= await fetch('http://localhost:3000/Login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userName: data.get('userName'),password: data.get('password')})
    })
    const serverData = await response.json();
    console.log(serverData.serverMsg);
    console.log(serverData.serverStatus);
    console.log(serverData.serverCode);
    if(serverData.serverCode === 'GOOD'){ 
        if(host === true){      //set login as Host
          navigate('/HostDashboard')
          setNavbarState(2)
        }
        else{                     //login as User
          navigate('/UserDashboard')
          setNavbarState(1)
        }}
    else{
      setErrorMessage(serverData.serverMsg)
    }}
  }
  return (
    <>
    <div>
      Login
      <Form className='regcontainer' onSubmit={handleLogin} >
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
        <Form.Label column sm={2} >
        User name
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="name" placeholder="User name" name="userName" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="password" placeholder="Password" name="password"/>
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Are you a host or a user?
          </Form.Label>
          <Col sm={3}>
            <Form.Check
              type="radio"
              label="Host - Create categories, games, and host games"
              name="group Host and User"
              id="formHorizontalRadios1"
              onChange={(event)=>handleChangeHost(event)}
            />
            <Form.Check
              type="radio"
              label="User - Play games and view personal scoreboard"
              name="group Host and User"
              id="formHorizontalRadios2"
              onChange={(event)=>handleChangeUser(event)}
            />
          </Col>
        </Form.Group>
      </fieldset>
      {errorMessage && (<p style={{color: 'red'}} className="error">{errorMessage} </p>)}
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 3, offset: 2 }}>
          <Button type="submit">Register</Button>
        </Col>
      </Form.Group>
      </Form>
  </div>
  </>
  )
}
export default Login