import React,{useState} from 'react'
import './login.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router'

const LoginScreen = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState({
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


    const login=()=>{
        if(user.email=='admin@admin')
        {
                if(user.password=='admin')
                {
                    navigate('/admin')
                }
        }

    }

      return (
        
            <div className='login'>
            {console.log(user)}
                <h1>Admin Login</h1>
                <input name='email' value={user.email} onChange={handleChange} type="text" placeholder='Enter your email'></input>
                <input name='password' value={user.password} onChange={handleChange} type="password" placeholder='Enter your password'></input>
                <h6>Forgot Password?</h6>
                <button className='button' onClick={login}>Login</button>
            </div>
        
      );
    }


export default LoginScreen;
