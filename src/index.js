import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from "./redux/store";

import Cart from './components/Cart';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);