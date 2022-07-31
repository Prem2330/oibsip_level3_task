import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import "../Styles.css";
import { useState } from 'react';
import App1 from './veggieselect';
import { useNavigate } from 'react-router';
import Ordered from './ordered';
import axios from 'axios';


const Pizza = ({pizza}) => {
    const[variant,setVariant]=useState("small");
    const[Quantity,setQuantity]=useState(1);
    const[bases,setBase]=useState("Thin crust");
    const[cheeses,setCheese]=useState("Mozzarella");
    const[sauces,setSauce]=useState("Pesto");
    const[veggiess,setVeggies]=useState("Tomato");
   
    const handleclick=(e)=>{
      e.preventDefault();
      var options={
        key:"rzp_test_MzWO9TnW1HKLLP",
        key_secret:"3zcfp4GtpocynUscf8WLWqXf",
        currency:"INR",
        amount:(pizza.prices[0][variant]*Quantity)*100,
        name:"Pizza",
        description:"Purchase",
        handler:function(response){
          alert("Your payment is successful");
          
        },
        prefill:{
          name:"Prem",
          email:"prempednekar2@gmail.com"
        },
        theme:{
          color:"#3399cc"
        }
      
    }
    var pay=new window.Razorpay(options);
    pay.open()
     const info=[{bases},{sauces},{cheeses},{variant},{veggiess}]
    console.log(info)
   

    axios.post("http://localhost:8080/success",info)
    }
    
    

    return (
      <>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={pizza.image} className="fit" />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <hr/>
            <Card.Text>
            {pizza.description}
            <Row>
            <Col md={6}><h6><b>Size</b></h6>
            <select value={variant} onChange={e=>setVariant(e.target.value)}>{pizza.varients.map((variant)=>(
                <option>{variant}</option>
            ))}
            </select>
            </Col>

            <Col md={6}><h6><b>Quantity</b></h6>
            <select value={Quantity} onChange={e=>setQuantity(e.target.value)}>
                {[...Array(10).keys()].map((v,i)=>
                <option value={i+1} >{i+1}</option>
                )}
            </select>
            </Col>
              </Row>
              <Row>
            <Col md={6}><b><h6>Base</h6></b>
              <select value={bases} onChange={e=>setBase(e.target.value)}>{pizza.base.map((bases)=>(
                <option>{bases}</option>))}
                </select>
                </Col>
                <Col md={6}><b><h6>Sauce</h6></b>
              <select value={sauces} onChange={e=>setSauce(e.target.value)}>{pizza.sauce.map((sauces)=>(
                <option>{sauces}</option>))}
                </select>
                </Col>
                <Col md={6}><b><h6>Veggies</h6></b>
                <App1/>
                </Col>
                <Col md={6}><b><h6>Cheese</h6></b>
              <select value={cheeses} onChange={e=>setCheese(e.target.value)}>{pizza.cheese.map((cheeses)=>(
                <option>{cheeses}</option>))}
                </select>
                </Col>
                
              </Row>
              
            </Card.Text>
            <Row>
                <Col md={6}>Price : {pizza.prices[0][variant]*Quantity} /-Rs</Col>
                <Col md={6}>
                    <Button className="bg-warning text-white" onClick={handleclick}>Buy </Button>
                </Col>
            </Row>
          </Card.Body>
        </Card>
        </>

      );
    
}
export default Pizza;
