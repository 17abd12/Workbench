import React from 'react'
import {Button} from '@mui/material'
function Header() {
  return (
    <div className='w-full flex py-3' style={{background:"linear-gradient(to right, #47D785, #3D63DD)"}}>
<div className="w-1/6 h-16 flex items-center justify-center px-auto text-center font-semibold size-32">
<div>
  <h1 className="text-3xl text-light-text">Skill</h1>
  <h1 className="text-3xl text-dark-text">Haven</h1>
</div>
</div>
      <div className=" w-5/6 flex justify-around">
         <Button style={{ fontSize: '1.1rem' ,fontWeight:'bold' }} className='text-light-primary' variant='text' color='inherit'>Home</Button>
         <Button style={{ fontSize: '1.1rem' ,fontWeight:'bold' }} className='text-light-primary' variant='text' color='inherit'>Services</Button>
         <Button style={{ fontSize: '1.1rem' ,fontWeight:'bold' }} className='text-light-primary' variant='text' color='inherit'>Technologies</Button>
         <Button style={{ fontSize: '1.1rem' ,fontWeight:'bold' }} className='text-light-primary' variant='text' color='inherit'>Our Team</Button>
         <Button style={{ fontSize: '1.1rem' ,fontWeight:'bold' }} className='text-light-primary' variant='text' color='inherit'>Contact us</Button>
      </div>
    </div>
  )
}

export default Header
