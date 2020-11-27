import React from "react";
// import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import style from './cartLink.module.scss';

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <div className={style.cart_link_container}>
      {/* <span>cart</span> */}
      <p className={style.cart_link_total}>{cartItems}</p>

    </div>
  );
}
