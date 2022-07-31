import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';



const OrderList = () => {

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
    <h1 >Available sauce types are </h1>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sauce</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  {data.map((item)=>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>White garlic sauce</td>
      <td id='item'>{item.WhiteGarlicSauce}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Garlic Ranch Sauce</td>
      <td id='item'>{item.GarlicRanchSauce}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Hummus</td>
      <td id='item'>{item.Hummus}</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Buffalo sauce</td>
      <td id='item'>{item.BuffaloSauce}</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Pesto</td>
      <td id='item'>{item.Pesto}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Manirana sauce</td>
      <td id='item'>{item.
ManiranaSauce}
</td>
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

export default OrderList