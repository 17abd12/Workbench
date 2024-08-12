import React from 'react'
import MyCard from "./MyCard.jsx"
import Image from 'next/image'
function Service() {


  let x = [{"name":"Mobile App Dev","Description":"Crafting mobile apps that captivate users, one tap at a time","img":"logo"}]
  let data =      [];
  for (let i = 0; i < 8; i++) {
    data.push( <MyCard data={x[0]} key={i}></MyCard>) 
 }

  return (
    <div className='py-10'  style={{background:"linear-gradient(to right, #47D785, #3D63DD)"}}>
      <div className=' text-center my-auto text-light-primary text-xl'>
      <h1 className='text-5xl font-satisfy py-5 text-dark-text font-medium'>
        Services We Offer
        </h1 >
        <h1 className="mx-16 text-balance">Providing tailored services is a key pathway to the success of businesses. Our professional team also brings creative aesthetics to enhance the overall experience</h1>

      </div>
      <div className='my-10'>

      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
        {data}
        </div>
    </div>
      </div>
    </div>
  )
}

export default Service
