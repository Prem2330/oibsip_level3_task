import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Meat = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8080/get').then((result)=>
{
  result.json().then((resp)=>{
    setData(resp)

})})
  })
  
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(document.getElementById("item").innerHTML=="5")
    {
    emailjs.sendForm('service_2lctbd6', 'template_j8g89oh', form.current, 'EAvVPf2uqT8x4Zj32')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  }
  return (
    <>
    
    <div className='style'>
    <h1 >Available Vegies are </h1>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Veggies</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  {
      data.map((item)=>
  <tbody>
    
   
      <tr>
      <th scope="row">1</th>
      <td>Tomato</td>
      <td id='item'>{item.Tomato}</td>
    </tr>
      
    <tr>
      <th scope="row">2</th>
      <td>Corn</td>
      <td id='item'>{item.Corn}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Bell Peppers</td>
      <td id='item'>{item.BellPeppers}</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Brocolli</td>
      <td id='item'>{item.Broccoli}</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Baby Spinach</td>
      <td id='item'>{item.BabySpinach}</td>
    </tr>
    <tr>
    <td> <form ref={form} onClick={sendEmail}>
      <input type="submit" value="Send" />
    </form></td>
    </tr>
    
  </tbody>
  )}
</table>
    </div>
    </>
  )
}

export default Meat;