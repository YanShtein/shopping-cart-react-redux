import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import bag from '../svg/bag.svg';
import { Link } from "react-router-dom";
import { Search } from "../redux/Shopping/actions";
import '../css/shared.css';
import '../css/navbar.css';

const Navbar = (props) => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    props.cart.forEach((item) => {
      count += item.quantity;
    });
    setCartCount(count)
  }, [props.cart, cartCount]);

  return (
    <div className='navbar'>
      <span className='navbar__logo'>
        <Link to="https://yanshtein.github.io/shopping-cart-react-redux/">YouShop</Link>
      </span>
      <div className="navbar__search"> 
        <input onChange={(e) => props.Search(e.target.value.toLowerCase())} type="text" placeholder="Type to search... e.g. phone, tablet, pc" maxLength="40"/>
      </div>
      <div className='navbar__cart'>
        <Link to="/cart">
          <div className='navbar__cart-count'><span>{cartCount}</span></div>
            <img src={bag} width="28" height="28" alt=''/>
        </Link>    
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
    Search: (value) => dispatch(Search(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);