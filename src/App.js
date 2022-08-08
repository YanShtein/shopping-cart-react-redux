import React from 'react';
import { Outlet } from "react-router-dom";

import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';

import './index.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div className='main'>
        <Products />
      </div>
      <div className='footer'>
        Designed & Built by Yan Shtein
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default App;
