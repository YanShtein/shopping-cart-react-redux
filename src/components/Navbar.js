import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import bag from '../svg/bag.svg';
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });

    setCartCount(count)
  }, [cart, cartCount]);

  return (
    <div className='header'>
      <span className='logo'>
        <Link to="/">YouShop</Link>
      </span>
      <div className="search">
        {/* search here */}
        <input type="text" placeholder="Type to search... e.g. phone, tablet, pc" maxLength="40"/>
      </div>
      <div className='cart-btn'>
        <div className='itemAdded'><span>{cartCount}</span></div>
          <Link to="/cart">
            <img src={bag} width="28" height="28" alt=''/>
          </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  };
};

export default connect(mapStateToProps)(Navbar);