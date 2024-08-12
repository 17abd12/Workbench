'use client';
// 'use server';
import React, { useState } from 'react';
import phone from '../public/CellPhone.png'
import {
    Button,
    TextField,
  } from '@mui/material';
import Image from 'next/image';

function Contactus() {

  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  var isFormFilled = name !== '' && email !== '' &&  comment !== '';
  
  const handleNameChange = (event) => {
    setName(event.target.value);
    isFormFilled = name !== '' && email !== '' &&  comment !== '';
    };
    const handleCommentChange = (event) => {
      setComment(event.target.value);
      isFormFilled = name !== '' && email !== '' &&  comment !== '';
      };
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
        isFormFilled = name !== '' && email !== '' &&  comment !== '';
        };    
          function sendData()
        {
          setEmail("");
          setName("");
          setComment("");
        }
        return (
          <div  id = "Contact" className='md:mx-32  w-full p-4 text-wrap italic md:text-5xl text-2xl flex flex-wrap'>
            <h1 className='w-2/3 text-dark-text'
            >Contact Us</h1>
        <div className='display flex '>
        <div>
            <TextField
            style = {{background:'white'}}
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={handleNameChange}/>
          <TextField
            style = {{background:'white'}}
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmailChange}/>

          <TextField
            style = {{background:'white'}}
            margin="dense"
            label="Comment"
            type="text"
            multiline
            color='primary'
            rows={4}
            fullWidth
            value={comment}
            onChange={handleCommentChange}/>

             <Button variant='contained'
             disabled = {!isFormFilled} 
             onClick={sendData}
             className='w-full' style={{backgroundColor:  '#03045e',color: 'white',borderRadius: '15px'}}>Send Message</Button>
            </div>


        <Image src = {phone} className='w-1/2 md:flex mr-44 hidden'/>
        </div>
        </div>
    )
}

export default Contactus
