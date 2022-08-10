import React from 'react';
import { Outlet } from "react-router-dom";

import Products from './components/Products';

import './index.css';

function App() {
  return (
    <div className='container'>
      <Products />
      <div className='footer'>
        Designed & Built by Yan Shtein
      </div>
      <Outlet />
    </div>
  );
};

export default App;
