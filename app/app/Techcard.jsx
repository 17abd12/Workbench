import React from 'react'
import Card from '@mui/material/Card';
import Image from 'next/image';

function TechCard({data}) {

  return (
        <Card className='flex flex-col justify-evenly text-balance text-center rounded-3xl text-light-text font-medium text-2xl'
                    sx={{height:200,width:190,background:"linear-gradient(to right, #47D785, #3D63DD)" }}>
        <Image   src={require(`../public/${data.img}.png`) }  className='object-cover h-1/2 w-1/2 mx-auto'></Image>
        <p>{data.name}</p>
        </Card>
  )
}

export default TechCard
