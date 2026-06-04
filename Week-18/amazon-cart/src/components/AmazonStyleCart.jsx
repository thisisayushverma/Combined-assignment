import React from "react";
import "../amazonStyleCart.css";
import Header from "./Header";
import { cartItemsState } from "../store/cartItemState";
import { useRecoilState } from "recoil";

const AmazonStyleCart = () => {
  const [cartItem ,setCartItems] = useRecoilState(cartItemsState);
  let data = [
    {
      title: "Atomic Habit",
      price: 369,
      quantity: 2,
    },
    {
      title: "Ikigai",
      price: 250,
      quantity: 1,
    },
    {
      title: "The power of subconscious mind",
      price: 369,
      quantity: 2,
    },
  ];
  return (
    <div>
      <Header/>
      <div className="cart-container">
        <div className="shopping-cart-main">
          <h1>Shopping Cart</h1>
          <div className="shopping-items">
            {cartItem.map((item) => {
              return (
                <div className="shopping-item">
                  <img className="item-img" />
                  <div className="item">
                    <h2>{item.title}</h2>
                    <p>In stock</p>
                    <div className="item-quantity">
                      <div className="item-sub">-</div>
                      <div>{item.quantity}</div>
                      <div className="item-add">+</div>
                      <span>Delete</span>
                    </div>
                  </div>
                  <div className="item-price">{item.price}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="order-summary">
          <h1>Order Summary</h1>
          <div className="item-summary">
            <div>Items ({data.length}):</div>
            <div>{data.length}</div>
          </div>
          <div className="item-total">
            <div>Order Total:</div>
            <div>34324</div>
          </div>
          <button>Procced to Buy</button>
        </div>
      </div>
    </div>
  );
};

export default AmazonStyleCart;
