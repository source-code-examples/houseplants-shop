// src/pages/ProductListingPage.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { plants } from "../data/plantsData";
import Header from "../components/Header";
import "./ProductListingPage.css";

export default function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <>
      <Header />
      <div className="product-listing">
        <h2 className="section-title">🌱 Our Plants</h2>
        <p className="section-intro">
          Discover our hand-picked collection of houseplants — perfect for every
          lifestyle and home.
        </p>
        <div className="categories">
          <h3 className="categories-title">Categories</h3>
          <ul className="categories-list">
            <li>🪴 Easy-care</li>
            <li>🌸 Flowering</li>
            <li>🌵 Succulents</li>
          </ul>
        </div>
        <div className="plants-grid">
          {plants.map((plant) => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} className="plant-img" />
              <h4>{plant.name}</h4>
              <p>{plant.price} €</p>
              <button
                disabled={isInCart(plant.id)}
                onClick={() => dispatch(addItem(plant))}
              >
                {isInCart(plant.id) ? "Im Warenkorb" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
