import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products';
import './index.css';
import { data } from './data.js';

// this.setState only works in class based components

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
        <Navbar cart={this.state.cart} search={this.state.search} Search={this.Search} modal={this.state.modal} Modal={this.ModalToggle}/>
        <Cart 
          cart={this.state.cart} 
          modal={this.state.modal} 
          addToCart={this.addToCart} 
          removeFromCart={this.removeFromCart} 
          emptyCart={this.emptyCart} 
          ModalToggle={this.ModalToggle}
        />
        <div className='main'>
          <Products search={this.state.search} addToCart={this.addToCart}/>
        </div>
        <div className='footer'>
          Designed & Built by Yan Shtein
        </div>
      </div>
    );
  };
};

export default App;
