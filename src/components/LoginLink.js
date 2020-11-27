import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";

export default function LoginLink() {
  const { user, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);
  // if the user exist (logout)
  if (user.token) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => {
          userLogout();
          clearCart();
        }}
      >
        Logout
      </button>
    );
  }
  // if the user do not exist (login)
  return (
    <Link to="/login">
      <button className="btn btn-primary">Login</button>
    </Link>
  );
}
