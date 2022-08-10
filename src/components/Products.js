import React from 'react';
import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/actions";

const Products = ({ products, addToCart }) => {
  return (
  <div className='products-main'>
    <div className='products-list'>
      {
        products.map((item) => (
          <div className='product' key={item.id}>
          <div className='product-img'>
            <img src={require(`../images/${item.img}`)} alt={item.name}/>
          </div>
          <div className='product-name'>{item.name}</div>
          <div className='product-footer'>
            <div className='product-price'>$ {item.price}</div>
            <button className='add-to-cart' onClick={() => addToCart(item.id)} value={item.id} title='Add to cart'>
              <svg xmlns="http://www.w3.org/2000/svg" pointerEvents="none" width="24" height="24" fillRule="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
            </button>
          </div>  
        </div>
        ))
      }
    </div>
    <div className='footer'>
      Designed & Built by Yan Shtein
    </div>
  </div>  
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);