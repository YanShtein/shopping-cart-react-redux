import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { data } from './data.js';

// this.setState only works in class based components

const Header = (props) => {
  let ItemsInCart = props.cart.map(item => item.quantity).reduce((a, b) => a + b, 0);
  return (
    <div className='header'>
    <span className='logo'>YouShop</span>
    <div className="search">
      <input value={props.search} onChange={props.Search} type="text" placeholder="Type to search... e.g. phone, tablet, pc" maxLength="40"/>
    </div>
      <div className='cart-btn' onClick={props.Modal}>
        <div className='itemAdded'><span>{ItemsInCart}</span></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fillRule="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
        </svg>
    </div>
  </div>
  );
};

const Modal = (props) => {
  let modalState = props.modal;
  let cartState = props.cart;
  let total = cartState.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0).toFixed(2);
  let empty = cartState.length === 0 ? 'Cart is empty...' : 'Shopping Cart';
  return (
    <div className='modal' style={modalState ? {display:'flex'} : {display:'none'}}>
    <div className='modal-content'>
      <div className='modal-header'>
        <span className='modal-title'>{empty}</span>
        <div className='modal-close' onClick={props.ModalToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </div>
      </div>
      {
        cartState.map(item => 
        <div className='modal-product' key={item.id}>
          <div className='modal-product_img'>
            <img src={require(`./images/${item.img}`)} alt={item.name}/>
          </div>
          <div className='modal-product_info'>
            <span>{item.name}</span>
            <span className='modal-product_price'>$ {item.price}</span>
          </div>
          <div className='modal-amount'>
            <button type='button' value={item.id} onClick={props.addToCart}>+</button>
            <span>{item.quantity}</span>
            <button type='button' value={item.id} onClick={props.removeFromCart}>-</button>
          </div>
        </div>
      )}
      <div className='modal-footer'>
        <div className='modal-empty-cart' onClick={props.emptyCart} title='Empty cart'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </div>
        <div className='modal-checkout'>
          <span>Checkout</span>
          <span>$ {total}</span>
        </div>
      </div>
    </div>
  </div>
  )
}

function Search(props) {
  let filteredData = data.filter((item) => {
    if (props.search === '') {
      return item;
    } else {
      return (
        item.category.toLowerCase().includes(props.search)
        || 
        item.name.toLowerCase().includes(props.search)
      )
    }
  })

  return (
    filteredData.map((item) => (
      <div className='product' key={item.id}>
      <div className='product-img'>
        <img src={require(`./images/${item.img}`)} alt={item.name}/>
      </div>
      <div className='product-name'>{item.name}</div>
      <div className='product-footer'>
        <div className='product-price'>$ {item.price}</div>
        <button className='add-to-cart' value={item.id} onClick={props.addToCart} title='Add to cart'>
          <svg xmlns="http://www.w3.org/2000/svg" pointerEvents="none" width="24" height="24" fillRule="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>
        </button>
      </div>  
    </div>
    ))
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      modal: false,
      search: [],
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.Search = this.Search.bind(this);
    this.ModalToggle = this.ModalToggle.bind(this);
  };

  addToCart(event) {
    let item_id = Number(event.target.value);
    let index = this.state.cart.findIndex(item => item.id === item_id);
    if (index > -1) {
      this.setState({
        cart: [
          ...this.state.cart.slice(0,index),
          Object.assign({}, this.state.cart[index], {quantity: this.state.cart[index].quantity + 1}),
          ...this.state.cart.slice(index+1)
        ]
      });
    } else {
      let addItem = data.filter(item => item_id === item.id)
      this.setState({
        cart: [
          ...this.state.cart, ...addItem
        ]
      });
    };
  };

  removeFromCart(event) {
    let item_id = Number(event.target.value)
    let index = this.state.cart.findIndex(item => item.id === item_id);
    if (this.state.cart[index].quantity === 1) {
      this.setState({
        // slice from 0 upto index *index not included*, and from index + 1 to end.
        cart: [
           ...this.state.cart.slice(0,index),
           ...this.state.cart.slice(index+1)
        ]
      });
    } else {
      // unpack-copy sliced from 0 upto index, than edit the existed property on a specific object,
      // in that property -> key: decrease quantity by one.
      // than unpack-copy from the index before + 1 , all that change in state cart[{objects}]
      this.setState({
        cart: [
          ...this.state.cart.slice(0,index),
          Object.assign({}, this.state.cart[index], {quantity: this.state.cart[index].quantity - 1}),
          ...this.state.cart.slice(index+1)
        ]
      });
    };
  };

  emptyCart() {
    this.setState({
      cart: [],
    });
  };

  Search(event) {
    this.setState({
      search: event.target.value.toLowerCase(),
    });
  };

  ModalToggle() {
    if (this.state.modal) {
      this.setState({
        modal: false,
      });
    } else {
      this.setState({
        modal: true,
      });
    };
  };

  render() {
    return (
      <div className='container'>
        <Header cart={this.state.cart} search={this.state.search} Search={this.Search} modal={this.state.modal} Modal={this.ModalToggle}/>
        <Modal 
          cart={this.state.cart} 
          modal={this.state.modal} 
          addToCart={this.addToCart} 
          removeFromCart={this.removeFromCart} 
          emptyCart={this.emptyCart} 
          ModalToggle={this.ModalToggle}
        />
        <div className='main'>
          <div className='products-list'>
            <Search search={this.state.search} addToCart={this.addToCart}/>
          </div>
        </div>
        <div className='footer'>
          Designed & Built by Yan Shtein
        </div>
      </div>
    );
  };
};



ReactDOM.createRoot(document.getElementById('root')).render(<App />);
