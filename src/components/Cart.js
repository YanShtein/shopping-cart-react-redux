import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
// import emptyIcon from '../svg/trash.svg';
// import closeIcon from '../svg/x.svg';

const Cart = () => {
  // let cartState = props.cart;
  // let total = cartState.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0).toFixed(2);
  // let empty = cartState.length === 0 ? 'Cart is empty...' : 'Shopping Cart';
  
  return (
    <div className='container'>
      {/* NavBar here istead of Outlet in App and change between cart and app,
      I want App to render in / with navBar, couldnt solve it for now. */}
      <Navbar />
      <div className='main'>
        <h1>Cart products: </h1>
        <Link to="/">Back</Link>
      </div>
      
    </div>
    
    // <div className='modal' style={{display:'none'}}>
    // <div className='modal-content'>
    //   <div className='modal-header'>
    //     <span className='modal-title'>{}</span>
    //     <div className='modal-close'>
    //       <img src={closeIcon} alt=""/>
    //     </div>
    //   </div>
      // {/* {
      //   cartState.map(item => 
      //   <div className='modal-product' key={item.id}>
      //     <div className='modal-product_img'>
      //       <img src={require(`../images/${item.img}`)} alt={item.name}/>
      //     </div>
      //     <div className='modal-product_info'>
      //       <span>{item.name}</span>
      //       <span className='modal-product_price'>$ {item.price}</span>
      //     </div>
      //     <div className='modal-amount'>
      //       <button type='button' value={item.id} onClick={props.addToCart}>+</button>
      //       <span>{item.quantity}</span>
      //       <button type='button' value={item.id} onClick={props.removeFromCart}>-</button>
      //     </div>
      //   </div>
      // )} */}
  //     <div className='modal-footer'>
  //       <div className='modal-empty-cart' title='Empty cart'>
  //         {/* empty cart here */}
  //         <img src={emptyIcon} alt=""/>
  //       </div>
  //       <div className='modal-checkout'>
  //         <span>Checkout</span>
  //         <span>$ {}</span>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  );
};

export default connect()(Cart);