import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from "./redux/store";

import './css/shared.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='container'>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Products />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route path='/cart/checkout' element={<Checkout />} />
          </Routes>
        </HashRouter>
      </div>  
    </Provider>
  </React.StrictMode>
);