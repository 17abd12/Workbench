'use client'
import React from 'react'
import {Button} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
function Header() {

  const scrollToSection = (sectionId) => {
  
    console.log("Here")
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      else
      {
        console.log("mo section found")
      }
    }, 500); // Adjust the delay value as needed
  };

  return (
    <div className='w-full flex py-3' style={{background:"linear-gradient(to right, #47D785, #3D63DD)"}}>
<div className=" md:flex hidden w-1/6 h-16 items-center justify-center px-auto text-center font-semibold size-32">
<div>
  <h1 className="text-3xl text-light-text">Skill</h1>
  <h1 className="text-3xl text-dark-text">Haven</h1>
</div>
</div>
      <div className=" md:flex hidden w-5/6 justify-around">

         <Button style={{ fontSize: '1.1rem' ,fontWeight:'bold' }}   onClick={() => scrollToSection('Home')} 
   className='text-light-primary' variant='text' color='inherit'>Home</Button>

   
         <Button style={{ fontSize: '1.1rem' ,fontWeight:'bold' }} onClick={() => scrollToSection('Services')} className='text-light-primary' variant='text' color='inherit'>Services</Button>
         <Button style={{ fontSize: '1.1rem' ,fontWeight:'bold' }} onClick={() => scrollToSection('Tech')} className='text-light-primary' variant='text' color='inherit'>Technologies</Button>
         <Button style={{ fontSize: '1.1rem' ,fontWeight:'bold' }} onClick={() => scrollToSection('Crew')}className='text-light-primary' variant='text' color='inherit'>Our Team</Button>
         <Button style={{ fontSize: '1.1rem' ,fontWeight:'bold' }} onClick={() => scrollToSection('Contact')} className='text-light-primary' variant='text' color='inherit'>Contact us</Button>
      </div>

<div className=" md:hidden flex h-16 items-center justify-evenly w-full px-auto size-32" >
  <IconButton sx={{ color: 'white' }} onClick={() => scrollToSection('Home')}>
      <HomeIcon fontSize="large" />
    </IconButton>
    <IconButton sx={{ color: 'white' }} onClick={() => scrollToSection('Services')}>
      <DesignServicesIcon fontSize="large" />
    </IconButton>
    <IconButton sx={{ color: 'white' }} onClick={() => scrollToSection('Tech')}>
      <DeveloperBoardIcon fontSize="large" />
    </IconButton>
    <IconButton sx={{ color: 'white' }} onClick={() => scrollToSection('Crew')}>
      <PeopleAltIcon fontSize="large" />
    </IconButton>
    <IconButton sx={{ color: 'white' }} onClick={() => scrollToSection('Contact')}>
      <ContactEmergencyIcon fontSize="large" />
    </IconButton>
</div>

      {/* Here is code for small diveces*/}

    </div>
  )
}

export default Header
