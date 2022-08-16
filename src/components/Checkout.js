import { connect } from "react-redux";
import React, { useEffect, useState } from 'react';
import '../css/shared.css';
import '../css/checkout.css';

const Checkout = ({ cart }) => {

	const [checkCount, setCheckCount] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    })

    setCheckCount(total > 1 ? total.toFixed(2) : total)
  }, [cart, checkCount]);

	const disableButton = cart.length === 0;

	return (
		<div className="checkout-main">
			<div className="checkout__cart">
				<h2>Cart summary:</h2>
					{
						cart.map((item) =>
							<div className='checkout-product' key={item.id}>
								<div className='checkout-product_info'>
									<span className="checkout-product_title">{item.name}</span>
									<span className='checkout-product_quantity'>Quantity: {item.quantity}</span>
								</div>
							</div>
						)
					}
			</div>
			<div className="checkout-content">
				<div className="checkout__address">
					<h3>Address details</h3>
					<h5>Full name</h5>
					<input type="text" />
					<h5>Phone number</h5>
					<input type="tel" />
					<h5>Email address</h5>
					<input type="email" />
					<div className="address">
						<div className="address-item">
							<h5>Country</h5>
							<input type="text" />
						</div>
						<div className="address-item">
							<h5>City</h5>
							<input type="text" />
						</div>
					</div>
					<h5>Address</h5>
					<input type="text" />
				</div>
				<div className="checkout__credit">
					<h3>Card details</h3>
					<h5>Name on card</h5>
					<input type="text" />
					<h5>Card Number</h5>
					<input type="tel" />
					<div className="expr">Expiration date</div>
					<div className="credit">
						<div className="credit-item">
							<h5>Month</h5>
							<input type="text" />
						</div>
						<div className="credit-item">
							<h5>Year</h5>
							<input type="text" />
						</div>
						<div className="credit-item">
							<h5>CVV</h5>
							<input type="text" />
						</div>
					</div>
					<button 
						disabled={disableButton} 
						style={disableButton ? {backgroundColor: 'grey', border: 'none', boxShadow: 'none'} : {}} 
						className="checkout-btn">Pay ${checkCount}</button>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};


export default connect(mapStateToProps)(Checkout);