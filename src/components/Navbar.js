import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import bag from '../svg/bag.svg';
import { Link } from "react-router-dom";
import {bindActionCreators} from 'redux';
import { search } from "../redux/Shopping/actions";

const Navbar = ({ cart }) => {

  const {search, value} = this.props;
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
        <input value={value} onChange={(event) => search(event.target.value)} type="text" placeholder="Type to search... e.g. phone, tablet, pc" maxLength="40"/>
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

const mapStateToProps = (state, {filteredData}) => {
  return {
    cart: state.shop.cart,
    value: filteredData.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({search}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);