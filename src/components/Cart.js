import { useEffect, useState } from "react";
import CartItem from "./CartItem";

export default function Cart({
  cartModalOpen,
  cartItems,
  handleIncrease,
  handleDecrease,
  handleDelete,
  openOrder,
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.pizzaPrice * item.pizzaQuantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <div className={cartModalOpen ? "modal-overlay" : "hidden"}>
      <div className="cartModal-content">
        <div className="cart-title">YOUR CART</div>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem
              key={item.pizzaId}
              cartItem={item}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <div className="cart-item-empty">Your cart is empty</div>
        )}

        <div className="cart-footer">
          <button onClick={() => openOrder()} className="btn">
            ORDER
          </button>
          <span>Total: {totalPrice} $</span>
        </div>
      </div>
    </div>
  );
}
