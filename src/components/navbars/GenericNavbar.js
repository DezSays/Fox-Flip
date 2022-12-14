import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/navbar.css'
import { Link } from 'react-router-dom'


const GenericNavbar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="/">Generic Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className='path'>Landing Page</Link>
              <Link to="/Login" className='path'>Login</Link>
              <Link to="/Registration" className='path'>Registration</Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    )
  }
  
  export default GenericNavbar