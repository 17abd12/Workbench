import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div className='h-1/4' style={{background:"linear-gradient(to right, #47D785, #3D63DD)"}}>
    <div className='flex items-baseline font-medium text-light-primary w-full justify-center'>
      <p className='mx-1 text-5xl text-dark-text'>Skill</p>
      <p className='mx-1 text-4xl'>Haven</p>
    </div>
    <div className='flex  justify-evenly my-12 mx-28'>
    <a href="https://www.instagram.com/"><InstagramIcon fontSize="large"  style={{ color: 'white' }}/></a>
    <a href="https://www.instagram.com/"><FacebookIcon fontSize="large"  style={{ color: 'white' }}/></a>
    <a href="https://www.instagram.com/"><TwitterIcon fontSize="large"  style={{ color: 'white' }}/></a>
    </div>
      <h1 className='text-light-primary text-lg text-center mb-0'>
      Created by Abd. All Rights Reserved.
        </h1>
    </div>
  )
}

export default Footer
