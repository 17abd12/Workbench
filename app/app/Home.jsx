import React from 'react'
import Image from 'next/image'
import logo from "../public/logo.png"
function Home() {
  return (
    <div className='md:flex py-12 justify-around h-3/4 bg-light-primary '>
        <div className='px-10 text-wrap items-start  flex justify-center flex-col'>
        <h1 className="text-6xl italic font-satisfy" style={{
          background: 'linear-gradient(to right, #47D785, #3D63DD)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>JEEWAY BHUTTO</h1>
        <p className='my-7 lg:text-xl text-sm leading-relaxed text-dark-text' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, mollitia fuga ea eum reprehenderit at totam eius aliquam omnis doloribus repudiandae, accusantium blanditiis adipisci deserunt! A dicta assumenda magnam est laboriosam asperiores soluta mollitia doloribus optio, dolorum ea quasi iste, reiciendis adipisci? Exercitationem tempore porro voluptatum tempora fuga corrupti quisquam!
        </p>
        </div>
      <Image  className = "mx-auto" src = {logo}></Image>
 </div>
  )
}

export default Home
