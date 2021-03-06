import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //reduce use
  //   const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  let shipping = 0;

  if (total > 35) {
    shipping = 12.99;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 0;
  }

  const tax = total / 5;
  const grandTotal = total + shipping + Number(tax);

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Orders: {cart.length} </p>
      <p>Product Price: ${formatNumber(total)}</p>
      <p>
        <small>Shipping Cost: ${shipping}</small>
      </p>
      <p>
        <small>Tax : ${formatNumber(tax)}</small>
      </p>
      <h3 className="grand-total">Total Price: ${formatNumber(grandTotal)}</h3>
    </div>
  );
};

export default Cart;
