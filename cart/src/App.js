import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";
import "./components/Header.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState("");

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setNotification(`${product.name} added to cart successfully!`);
    setTimeout(() => setNotification(""), 2000); 
  };

  return (
    <Router>
      <div className="app">
        {notification && <div className="notification">{notification}</div>}
        <Routes>
          <Route
            path="/"
            element={<Home cartItems={cartItems} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
