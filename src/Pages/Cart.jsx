import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const { items, cartTotal, removeItem, updateItemQuantity, setItems } =
    useCart();
  return (
    <>
      <div className="container">
        {items.map((item) => {
          return (
            <div className="cart-item">
              <img width={80} src={item.images} alt="" />
              <div className="card-body">
                <h4>{item.title}</h4>
                <p>{item.id}</p>
              </div>
              <div className="counter">
                <button className="fa-solid fa-plus" onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}></button>
                <span>{item.quantity}</span>
                <button className="" onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}>-</button>
              </div>
              <i className="fa-solid fa-trash" onClick={()=> removeItem(item.id)}></i>
            </div>
          );
        })}
        <div className="buy" onClick={()=> setItems([])}>
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Buy Now</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
