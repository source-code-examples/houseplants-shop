// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Homepage
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="nav-link">
          Shopping Cart
        </Link>
      </nav>
      <div className="cart-icon">
        🛒 <span className="cart-count">{totalQuantity}</span>
      </div>
    </header>
  );
}
