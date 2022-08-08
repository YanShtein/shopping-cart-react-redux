import React from 'react';
import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/actions";
import Navbar from './Navbar';
import emptyIcon from '../svg/trash.svg';

const Cart = ({ cart, addToCart }) => {
  // let total = cartState.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0).toFixed(2);
  // let empty = cartState.length === 0 ? 'Cart is empty...' : 'Shopping Cart';
  
  return (
    <div className='container'>
      {/* NavBar here istead of Outlet in App and change between cart and app,
      I want App to render in / with navBar, couldnt solve it for now. */}
      <Navbar />
      <div className='cart-body'>
        <div className='cart-content'>
          <div className='cart-header'>Shopping cart</div>
            {
              cart.map((item) => 
              <div className='cart-product' key={item.id}>
                <div className='cart-product_img'>
                  <img src={require(`../images/${item.img}`)} alt={item.name}/>
                </div>
                <div className='cart-product_info'>
                  <span>{item.name}</span>
                  <span className='cart-product_price'>$ {item.price}</span>
                </div>
                <div className='cart-qty'>
                  <button type='button' value={item.id} onClick={() => addToCart(item.id)}>+</button>
                  <span>{item.quantity}</span>
                  <button type='button' value={item.id} onClick={() => addToCart(item.id)}>-</button>
                </div>
              </div>
            )}
            <div className='cart-footer'>
            <div className='empty-cart' title='Empty cart'>
              {/* empty cart here */}
              <img src={emptyIcon} alt=""/>
            </div>
            <div className='cart-checkout'>
              <span>Checkout</span>
              <span>$ {}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);