import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {

    let goBackToHome = useNavigate()

    const[student,setStudent]=useState({
        firstName:" ",
        lastName:" ",
        email:" "
    });

    const{firstName,lastName,email} = student;

    const onInputChange=(e)=>{
        //Keep a new Update
        setStudent({...student, [e.target.name]: e.target.value});
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://54.205.160.227:8080/students", student);
        goBackToHome("/");
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Student Registration</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='firstName' className='form-label'>
                                First Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your first name'
                                name='firstName'
                                value={firstName}
                                onChange={(e)=>onInputChange(e)}    
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='lastName' className='form-label'>
                                Last Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your last name'
                                name='lastName'
                                value={lastName} 
                                onChange={(e)=>onInputChange(e)}   
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>
                                Email
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your Email'
                                name='email'
                                value={email}
                                onChange={(e)=>onInputChange(e)}    
                            />
                        </div>

                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <button type='button' className='btn btn-outline-danger mx-2' onClick={() => goBackToHome("/")}>Cancel</button>
                        {/* <Link className='btn btn-outline-danger mx-2' to="/"></Link> */}
                    </form>
            </div>
        </div>
    </div>
  )
}
