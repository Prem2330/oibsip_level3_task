import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
const Order = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
        <h5 className='text-light'>
          Order the pizza of your choice
        </h5>
          <Nav className='ms-auto text-light  '>
              <LinkContainer to="/app">
                  <Nav.Link >Home</Nav.Link>
              </LinkContainer>
          </Nav>
        </Container>
        </Navbar>
      
    );
}

export default Order