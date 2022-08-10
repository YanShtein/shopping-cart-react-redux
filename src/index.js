import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import { Provider } from 'react-redux';
import store from "./redux/store";

import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);