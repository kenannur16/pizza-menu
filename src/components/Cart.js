import CartItem from "./CartItem";

export default function Cart({
  cartModalOpen,
  order,
  size,
  quantity,
  ingredients,
}) {
  const addToCart = () => {
    const item = {
      pizzaName: order.pizzaName,
      size: size,
      quantity: quantity,
      ingredients: ingredients,
      price: price,
    };
  };

  return (
    <div className={cartModalOpen ? "modal-overlay" : "hidden"}>
      <div className="cartModal-content">
        <h2>Your CART</h2>
        <CartItem />
        <h2>Total: 25.4 $</h2>
      </div>
    </div>
  );
}
