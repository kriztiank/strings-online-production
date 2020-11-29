// import React from "react";
// import { CartContext } from "../../context/cart";
// import style from './cartLink.module.scss';

// export default function CartLink() {
//   const { cartItems } = React.useContext(CartContext);

//   return (
//     <div className={style.cart_link_container}>
//       {/* <span>cart</span> */}
//       <p className={style.cart_link_total}>{cartItems}</p>

//     </div>
//   );
// }

import React from "react";
import { CartContext } from "../../context/cart";
import './Cartlink.scss';

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <div className="cart_link_container">
      <p className="cart_link_total">{cartItems}</p>
    </div>
  );
}