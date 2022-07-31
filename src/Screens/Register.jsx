import React,{useState} from 'react'
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Register = () => {
    const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
})
    const handleChange=e=>{
        
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const navigate=useNavigate();
    
    const register=()=>{
        const {name,email,password}=user
        if(name && email && password)
        {
        {axios.post("http://localhost:8080/register",user).then(res=>res.data.message=='Successfully Registered'?(alert("Successfully registered,Please Log in"),navigate('/login')):(alert("User Already Exists")))}
        }
    }
    {document.body.style="background:#20B2AA	"}
    

  return (
    
    <div className='register'>

                <h1>Register</h1>
                <input type="text" name='name' value={user.name} onChange={handleChange} placeholder='Enter your name'></input>
                <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Enter your email'></input>
                <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Enter your password'></input>
                <button className='button' onClick={register}>Register</button>
            </div>
  
  );
}

export default Register
