import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';

function topbar() {
    return (
          <Navbar bg='dark' variant='dark' expand='lg'>
          <Container fluid>
          <h5 className='text-light'>
            Best Pizza's in the World
          </h5>
            <Nav className='ms-auto text-light  '>
            <LinkContainer to="/home">
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                    <Nav.Link >Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                    <Nav.Link >Login</Nav.Link>
                </LinkContainer>
            </Nav>
          </Container>
          </Navbar>
        
      );
}

export default topbar;