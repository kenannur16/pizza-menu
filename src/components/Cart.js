import CartItem from "./CartItem";

export default function Cart({ cartModalOpen, cartItems }) {
  return (
    <div className={cartModalOpen ? "modal-overlay" : "hidden"}>
      <div className="cartModal-content">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} />)
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
    </div>
  );
}
