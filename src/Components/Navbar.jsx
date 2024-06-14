import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/Navbar.css";
import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/CustomVideoPlayer.css'

function Navbars({ onLogout }) {
  const userData = useSelector((state) => state.auth.userData);
  const userInitial = userData ? userData.name.charAt(0).toUpperCase() : '';

  return (
    <Navbar expand="lg" className="bg-dark" fixed='top'>
      <Container>
        <Navbar.Brand href="/" className='text-white'>PLATFORM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-lg-5 align-items-center justify-content-center">
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/VideoCount" className='text-white'>Coins Earnings</Nav.Link>
            <Nav.Link href="/CustomVideoPlayer" className='text-white'>CustomVideoPlayer</Nav.Link>
            {userData ? (
              <>
                <Nav.Link href="/Profile" className='text-white'>
                  Profile <span className='UserBtn'>{userInitial}</span>
                </Nav.Link>
                <Nav.Link className='text-white'>
                  <button className="btn btn-link text-white text-decoration-none py-2 px-4 text-dark" onClick={onLogout}>Logout</button>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link href="/Login" className='text-white'>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
