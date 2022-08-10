import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../redux/Shopping/actions";
import Navbar from './Navbar';
import emptyIcon from '../svg/trash.svg';

const Cart = ({ cart, addToCart, removeFromCart, emptyCart }) => {

  const [checkCount, setCheckCount] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    })

    setCheckCount(total > 1 ? total.toFixed(2) : total)
  }, [cart, checkCount]);


  return (
    <div className='container'>
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
                  <button type='button' value={item.id} onClick={() => removeFromCart(item.id)}>-</button>
                </div>
              </div>
            )}
            <div className='cart-footer'>
            <div className='empty-cart' title='Empty cart' onClick={() => emptyCart()}>
              <img src={emptyIcon} alt=""/>
            </div>
            <div className='cart-checkout'>
              <span>Checkout</span>
              <span>$ {checkCount}</span>
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
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    emptyCart: () => dispatch(emptyCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
