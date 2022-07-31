import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const AddnewPizza = () => {
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
        <table id='table' class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Meat</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  {data.map((item)=>
  <tbody>
  
    <tr>
      <th scope="row">1</th>
      <td>Chicken</td>
      <td id="item">{item.Chicken}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mutton</td>

      <td id="item">{item.Mutton}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Pork</td>
      <td id="item">{item.Pork}</td>
      
    </tr>
    <tr>
    <td> 

    <form ref={form} onClick={sendEmail}>
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

export default AddnewPizza