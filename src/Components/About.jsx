import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'
import {MdOutlineDeliveryDining} from 'react-icons/md'
import {IoMdRestaurant} from 'react-icons/io'
import {FcOnlineSupport} from 'react-icons/fc'
const About = () => {
  return (
    <div className='bg-dark'>
   
  <div className="container-fluid bg-2 text-center">
  <br/>
    <h3>Who are we?</h3>
    <p>We make the best Pizza's in the world</p>
    <p>A small restaurant chain found in 1980.We have come all the way to serve you best pizza in the world.</p>
    <p>We have our food chains in more than 40 countries now and we are still growing.Pizza's for everyone,from kids to adults</p>
    <p>We ensure optimal level of sanitation and safety standards in work area at all times and
monitor and maintain clean working area and cooking surfaces to make pizzas.
    </p>
    <br/>
  </div>
 
  <div class="container-fluid text-center bg-dark text-light ">
  <br/> 
    <h2>What we offer</h2>

    <br/>
    <br/>
    <div class="row">
      <div class="col-sm-4 text-light">
        <FcOnlineSupport className='text-warning size'/>
        <h4>Order Online</h4>
        <p>Order from the comfort of your home. </p>
      </div>
      <div class="col-sm-4 text-light">
        <MdOutlineDeliveryDining className='text-warning size'/>
        <h4>Home Develivery</h4>
        <p>Free Home Delivery above bill of 600</p>
      </div>
      <div class="col-sm-4 text-light">
       <IoMdRestaurant className='text-warning size'/>
        <h4>Dine In</h4>
        <p>Taste our pizza's in our own dining area's</p>
      </div>
      </div>
      <br/><br/>
    
    
  </div>

  
  </div>
  )
}

export default About