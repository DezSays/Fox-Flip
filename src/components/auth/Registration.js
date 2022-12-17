import React from 'react'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { v4 as uuidv4 } from 'uuid';

export default function Registration(){

  const [avatar, setAvatar] = useState('avatar is empty')
  const [host, setHost] = useState(false)
  const [user, setUser] = useState(false)

  const handleChangeHost = async (event) => {
    setHost(event.target.checked)
  }
  const handleChangeUser = async (event) => {
    setUser(event.target.checked)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
 
    if(data.get('avatar') === null){
      setAvatar('avatar is empty')
    }
    const userID = uuidv4()
    console.log({
      userName: data.get('userName'), 
      email: data.get('email'),      
      password: data.get('password'),
      avatar: avatar,
      host: host,
      user: user,
      userID: userID
    })
      /* Sending a post request to the server. */
      await fetch('http://localhost:3000/create_new_user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userID: userID, userName: data.get('userName'),email: data.get('email'),password: data.get('password'),
      avatar: avatar, ranking: 0,amountWon: 0,})
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
  }
  return (
    <>
      Registration
      <Form className='regcontainer' onSubmit={handleSubmit} >
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
        <Form.Label column sm={2} >
        User name
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="name" placeholder="User name" name="userName" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="email" placeholder="Email" name="email" />
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
      <Form.Group  as={Row} className="mb-3" controlId="formFile">
        <Form.Label column sm={2}>
          Upload Profile Picture
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="file" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 3, offset: 2 }}>
          <Button type="submit">Register</Button>
        </Col>
      </Form.Group>
    </Form>
    </>
  )
  }
