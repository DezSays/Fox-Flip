import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import "./avatarIconNavbar.css"

const HostNavbar = (props) => {

  const navigate = useNavigate();

  const userNameAvatar = props.userNameAvatar.slice(0, 3)

  const userAvatarClick = ()=> {
    navigate('/Logout');
    <Link to="/Logout" className='path'>Logout</Link>
  }

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="/HostDashboard">Host Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/HostDashboard" className='path'>Dashboard</Link>
                <Link to="/Logout" className='path'>Logout</Link>
              </Nav>
            </Navbar.Collapse>
            <button onClick={userAvatarClick} className='my-avatar'>{userNameAvatar}</button>
        </Container>
        </Navbar>
      )
}

export default HostNavbar