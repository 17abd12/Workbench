import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Tech from './Tech.jsx';
import Service from './Services.jsx';
import Contactus from './Contactus.jsx';
import Crew from './Crew.jsx';
import Footer from './Footer.jsx';

function Page() {
  return (
    <div className='h-screen'>
      <Header />
      <Home id="Home"></Home>
      <Service></Service>
      <Tech></Tech>
      <Crew ></Crew>
      <Contactus></Contactus>
      <Footer></Footer>
    </div>
  );
}

export default Page;
