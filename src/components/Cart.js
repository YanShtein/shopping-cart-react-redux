import emptyIcon from '../svg/trash.svg'
import closeIcon from '../svg/x.svg'

const Cart = (props) => {
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
          <img src={closeIcon} alt=""/>
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
          <img src={emptyIcon} alt=""/>
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

export default Cart;