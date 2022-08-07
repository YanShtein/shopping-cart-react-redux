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
            <img src={require(`../images/${item.img}`)} alt={item.name}/>
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
  );
};

export default Modal;