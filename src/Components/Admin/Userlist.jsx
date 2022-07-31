import React from 'react'
import './style.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Userlist = () => {

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
    <h1 >Available Pizza bases are </h1>
        <table class="table table-striped">
  <thead>
  
    <tr>
      <th scope="col">#</th>
      <th scope="col">Pizza Base</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  {data.map((item)=>
  <tbody>
  
    <tr>
      <th scope="row">1</th>
      <td>Cheese Burst</td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Pan Pizza</td>
      <td id='item'>{item.PanPizza}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Thin crust</td>
      <td id='item'>{item.ThinCrust}</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Stuffed</td>
      <td id='item'>{item.Stuffed}</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Cheese stuffed</td>
      <td id='item'>{item.CheeseStuffed}</td>
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

export default Userlist