import React from 'react'
import './style.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Pizzalist = () => {

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
    
    <h1 >Available Cheese types are </h1>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Cheese</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  {data.map((item)=>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mozarrella Cheese</td>
      <td id='item'>{item.MozarellaCheese}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Parmesan Cheese</td>
      <td id='item'>{item.ParmesanCheese}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Gouda Cheese</td>
      <td id='item'>{item.
GoudaCheese}</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Goat cheese</td>
      <td id='item'>{item.GoatCheese
      }</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Ricotta cheese</td>
      <td id='item'>{item.RicottaChesse}
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

export default Pizzalist