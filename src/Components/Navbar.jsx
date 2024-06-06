import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/Navbar.css";
import React from 'react';
import { useSelector } from 'react-redux';

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-dark" fixed='top'>
      <Container>
        <Navbar.Brand href="/" className='text-white'>PLATFORM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-lg-5">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link  href="/VideoCount">Coins Earnings</Nav.Link>
            <Nav.Link  href="">Video Call</Nav.Link>
            <Nav.Link  href="/Profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;