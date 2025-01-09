import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Cart.css";

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate(); 
  const deliveryFee = 20; 
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      alert("Invalid promo code");
      setDiscount(0);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - (subtotal * discount) / 100 + deliveryFee;
  };

  return (
    <div className="cart-page">
      <h1
        style={{ fontSize: "40px", textAlign: "center", marginBottom: "20px" }}
      >
        MY SHOPPING CART
      </h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="cart-item">
                  <img src={item.img} alt={item.name} />{" "}
                  <div>
                    <p>{item.name}</p>
                    <p>Product ID: {item.id}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>{" "}
              <td>
                <button
                  className="delete-button"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <div className="summary-line">
          <span>Discount:</span>
          <span>${((calculateSubtotal() * discount) / 100).toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>Delivery:</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>Subtotal:</span>
          <span>${calculateSubtotal().toFixed(2)}</span>
        </div>
        <div className="summary-line total">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>

      <div className="promo-code">
        <input
          type="text"
          placeholder="ENTER PROMO CODE"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button onClick={applyPromoCode}>APPLY DISCOUNT</button>
      </div>

      <div className="cart-actions">
        <button className="back-button" onClick={() => navigate("/")}>
          BACK TO SHOP
        </button>
        <button className="checkout-button">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
