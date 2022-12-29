import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

import "./avatarIconNavbar.css"
import { useNavigate } from "react-router-dom";

const UserNavbar = (props) => {

  const navigate = useNavigate();
  const userNameAvatar = props.userNameAvatar.userName

  //TODO FIX below, slice creates error from tome to time after refresh or registration
  //const userNameAvatar = props.userNameAvatar.userName.slice(0, 3)

  const userAvatarClick = ()=> {
    navigate('/Logout');
    <Link to="/Logout" className='path'>Logout</Link>
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
    <Container>
      <Navbar.Brand href="/UserDashboard">User Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/UserDashboard" className='path'>Dashboard</Link>
          </Nav>
        </Navbar.Collapse>
        <button onClick={userAvatarClick} className='my-avatar'>{userNameAvatar}</button>
    </Container>
    </Navbar>
  )
}

export default UserNavbar