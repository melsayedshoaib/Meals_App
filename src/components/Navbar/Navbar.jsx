import './Navbar.module.scss'

import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className='py-2 fixed-top'>
      <Container>
        <Link to={"home"} className='text-dark'>Meals</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={'home'} className='me-3'>Home</Link>
            <Link to={'categories'} className='me-3'>Categories</Link>
            <Link to={'random'}>Random</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
