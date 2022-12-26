import axios from 'axios'
import React, { useState } from 'react'
import { BiCheckbox } from 'react-icons/bi'
import './LogIn.css'
const LogIn = () => {

    const[userz,setUserz] =useState({
        username:'',
        password:''
    })
    const {username,password} = userz

    const inpu = (e)=>{
        setUserz({...userz,[e.target.name]:e.target.value})
    }
    const saveUser = async(e) =>{
        await axios.post('http://localhost:8080/save',userz)
    }
  return (
    <div className='bg'>
    <div className='container '>
        <div className='row'>
            <div className='col-md-6 offset-md-4 bordered round mv shadow p-4 mt-3'>
                <div>
                    <h2 className='text-white'>Log In</h2>
                    <form className='form-group row mb-3  mg' onSubmit={saveUser()}>
                        <input
                        type= 'text'
                        className=' fm'
                        name = 'username'
                        value ={username} 
                        onChange ={inpu}
                        placeholder = "username"
                        required
                        autoComplete='off'
                        />
                        <input
                        type= 'text'
                        className=' fm1'
                        name = 'password'
                        value ={password}
                        onChange = {inpu}
                        placeholder = 'password'
                        required
                        autoComplete='off'
                        />
                        <p className='text-success'>
                            Forget your Account?

                        </p>

                        <button className='btn btn-secondary text-white '>Log In</button>
                               <label className='text-white'>Remeber Me</label>
                              

                        
                        <button className='btn btn-success W-70' type='submit'>Log with google</button>


                    </form>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default LogIn
