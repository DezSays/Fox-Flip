import React from 'react'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Registration = () => {
  return (
    <>
      Registration

      <Form className='regcontainer'>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="name" placeholder="Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="password" placeholder="Password" />
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
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="User - Play games and view personal scoreboard"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
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

export default Registration