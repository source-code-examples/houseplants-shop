import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./CartPage.css";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <>
      <Header />
      <div className="cart-page">
        <h2>Warenkorb</h2>
        <p>Gesamtanzahl: {totalQuantity}</p>
        <p>Gesamtkosten: {totalPrice} €</p>

        <div className="cart-items">
          {items.length === 0 ? (
            <p>Dein Warenkorb ist leer.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <h4>{item.name}</h4>
                <p>Preis: {item.price} €</p>
                <p>Menge: {item.quantity}</p>

                <div className="cart-buttons">
                  <button onClick={() => dispatch(addItem(item))}>+</button>
                  <button onClick={() => dispatch(removeItem(item.id))}>
                    -
                  </button>
                  <button onClick={() => dispatch(deleteItem(item.id))}>
                    Löschen
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-actions">
          <button className="checkout-btn">Checkout (Coming Soon)</button>
          <Link to="/products">
            <button className="continue-btn">Weiter einkaufen</button>
          </Link>
        </div>
      </div>
    </>
  );
}
