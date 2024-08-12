import React from 'react'
import Card from '@mui/material/Card';
import WebIcon from '@mui/icons-material/Web';
// import App from '../public/App-Logo.png'
import Image from 'next/image'

function MyCard({data}) {

  return (
        <Card className='flex flex-col justify-evenly text-balance text-center bg-light-primary rounded-xl'
                    sx={{height:300,width:280 }}>
        <Image  src={require(`../public/${data.img}.png`) } className='h-1/2 w-1/2 mx-auto'></Image>
        <h1 className="text-2xl font-medium" style={{
          background: 'linear-gradient(to right, #47D785, #3D63DD)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>{data.name}</h1>
        <p>{data.Description}</p>
        </Card>
  )
}

export default MyCard
