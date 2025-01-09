import React, { useState } from "react";
import Header from "./Header";

const Home = ({ cartItems, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Show Piece",
      price: 99,
      img: "/assets/images/3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "cushion",
      price: 89,
      img: "/assets/images/5.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Chair",
      price: 150,
      img: "/assets/images/6.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "Lamp",
      price: 99,
      img: "/assets/images/8.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      name: "Table",
      price: 499,
      img: "/assets/images/9.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      name: "Mirror",
      price: 199,
      img: "/assets/images/4.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <Header cartCount={cartItems.length} />

      <div
        className="container"
        style={{
          marginTop: "0rem",
          backgroundColor: "#B59F78",
          width: "100%",
          margin: 0,
        }}
      >
        <div className="card__container">
          {products.map((product) => (
            <div
              key={product.id}
              className="card__product"
              onClick={() => handleCardClick(product)}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                textAlign: "center",
                cursor: "pointer",
                background: "#FAF6E3",
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                className="card__img"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div>
                <h3 className="card__name">{product.name}</h3>
                <span className="card__price">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="modal active-modal"
          onClick={handleCloseModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="modal__card"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#B59F78",
              borderRadius: "8px",
              padding: "2rem",
              width: "350px",
              textAlign: "center",
            }}
          >
            <i
              className="ri-close-large-line modal__close"
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                cursor: "pointer",
              }}
            ></i>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="modal__img"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                marginBottom: "1rem",
              }}
            />
            <div>
              <h3 className="modal__name">{selectedProduct.name}</h3>
              <p className="modal__info">{selectedProduct.description}</p>
              <span className="modal__price" style={{ color: "#2A3663" }}>
                ${selectedProduct.price}
              </span>
            </div>
            <div className="modal__buttons" style={{ marginTop: "1rem" }}>
              <button
                className="modal__button"
                style={{
                  background: "#002333",
                  color: "#B59F78",
                  padding: "1rem 1rem",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  addToCart(selectedProduct);
                  handleCloseModal(); 
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
