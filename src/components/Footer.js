import React from 'react'
import '../styles/footer.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (

  <Navbar className='footer-container' bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Jeopardy Placeholder</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/AboutUs">About Us</Nav.Link>
        <Nav.Link href="#">Privacy Policy</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Footer