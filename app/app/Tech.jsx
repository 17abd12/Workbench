import TechCard from './Techcard'
import React from 'react'


let x = [{"name":"Python","img":"python"}]
let data =      [];
for (let i = 0; i < 8; i++) {
  data.push( <TechCard data={x[0]} key={i}></TechCard>) 
}

function Tech() {
  return (
    <div className='
     bg-light-primary'  id="Tech">
     <div className=' text-center my-auto text-dark-text  text-xl'>
      <h1 className='text-5xl font-satisfy py-5 font-medium'style={{
          background: 'linear-gradient(to right, #47D785, #3D63DD)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Technologies We Use
        </h1 >
        <h1 className="mx-16 text-balance">Providing tailored services is a key pathway to the success of businesses. Our professional team also brings creative aesthetics to enhance the overall experience</h1>

      </div>
      <div className='my-10'>

      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-24'>
        {data}
        </div>
    </div>
      </div>
    </div>
  )
}

export default Tech
