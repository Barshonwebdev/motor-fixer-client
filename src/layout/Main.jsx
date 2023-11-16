import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
      <div>
        <div className="max-w-5xl mx-auto" id="home">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <div className='flex flex-col '>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;