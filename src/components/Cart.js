import CartItem from "./CartItem";

export default function Cart({ cartModalOpen, cartItems }) {
  return (
    <div className={cartModalOpen ? "modal-overlay" : "hidden"}>
      <div className="cartModal-content">
        <h2>Your CART</h2>
        {cartItems.map((item) => (
          <CartItem item={item} />
        ))}

        <h2>Total: 25.4 $</h2>
      </div>
    </div>
  );
}
