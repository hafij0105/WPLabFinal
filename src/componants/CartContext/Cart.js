import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Button } from '@mui/material';
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handlePurchase = () => {
    alert('Purchase successful!');
    // Optionally clear the cart
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cartItems">
          {cartItems.map((item, index) => (
            <div key={index} className="cartItem">
              {/* Removed image rendering */}
              <div className="cartItemDetails">
                <h2>{item.name}</h2>
                <p>{item.price}</p>
              </div>
              <div className="cartItemActions">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <Button variant="contained" color="primary" onClick={handlePurchase}>
            Purchase
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
