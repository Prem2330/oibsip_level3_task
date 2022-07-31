import React from 'react'
import {Row,Col,Container,Button,ButtonGroup} from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from '../Components/Admin/Userlist'
import Pizzalist from '../Components/Admin/Pizzalist';
import AddnewPizza from '../Components/Admin/AddnewPizza';
import OrderList from '../Components/Admin/OrderList';
import Meat from '../Components/Admin/Meat';
import Pizza from '../Components/pizza';
import './AdminScreen.css';

import { useNavigate } from 'react-router-dom';


const AdminScreen = () => {
    const navigate=useNavigate();
    const leavePage = () => {
      
        navigate("/admin/userlist");
      }
      const leavePage2 = () => {
        navigate("/admin/pizzalist");
      }
      const leavePage3 = () => {
        navigate("/admin/addnewpizza");
      }
      const leavePage4 = () => {
        navigate("/admin/orderlist");
      }
      const leavePage5 = () => {
        navigate("/admin/meat");
      }
      const accepted=()=>{
        {document.getElementById("but").innerHTML="Order recieved"}
      }
      {document.body.style="background:white"}
  return (
    <>
    <Container>

        <Row>

        <h1 className='text-center bg-dark text-light p-2 mt-5'>admin Panel</h1>
            <Col md={4}>

            <ButtonGroup vertical style={{minHeight:"400px"}}>
      <Button onClick={leavePage}>Pizza Base</Button>
      <Button onClick={leavePage2}>Cheese</Button>

      <Button onClick={leavePage3}>Meat</Button>
      <Button onClick={leavePage4}>Sauce</Button>
      <Button onClick={leavePage5}>Veggies</Button>
      </ButtonGroup>
            </Col>
            <Col md={8}>
            
      <Routes>
      <Route path="/" element={<Userlist/>}/>
        <Route path="/userlist" element={<Userlist/>}/>
        <Route path="/pizzalist" element={<Pizzalist/>}/>
        <Route path="/addnewpizza" element={<AddnewPizza/>}/>
        <Route path="/orderlist" element={<OrderList/>}/>
        <Route path="/meat" element={<Meat/>}/>
      </Routes>
   
            </Col>
        </Row>

        <table align='center'>
        <tr>
       
        <td><h2 className='order'><u>Order List</u></h2></td>
        </tr>
        <tr>
        <h3 className='order'><i>Order No 3 received   </i><button id='but' onClick={accepted}>Accept</button></h3>
        </tr>
        </table>
        </Container>
    </>
  )
}

export default AdminScreen