import React from 'react'
import AllPizza from '../pizzadata';
import {Container,Col, Row} from 'react-bootstrap';
import Pizza from './pizza';


export const Login = () => {
  return (
    <>
    <Container className='back'>
        <Row>
            {
                AllPizza.map(pizza=>(
                    <Col md={4}>
                        <Pizza pizza={pizza}/>
                    </Col>
                ))
            }
        </Row>
    </Container>
    
    </>
  )
}

export default Login;