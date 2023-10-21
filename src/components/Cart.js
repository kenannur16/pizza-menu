import { useEffect, useState } from "react";
import CartItem from "./CartItem";

export default function Cart({ cartModalOpen, cartItems }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.pizzaPrice, 0);
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <div className={cartModalOpen ? "modal-overlay" : "hidden"}>
      <div className="cartModal-content">
        <div className="cart-title">YOUR CART</div>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} />)
        ) : (
          <h2>Your cart is empty</h2>
        )}

        <div className="cart-footer">
          <button className="btn">ORDER</button>
          <span>Total: {totalPrice} $</span>
        </div>
      </div>
    </div>
  );
}
