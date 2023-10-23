export default function CartItem({
  cartItem,
  handleIncrease,
  handleDecrease,
  handleDelete,
}) {
  const handleTotalPrice = () => {
    return cartItem.pizzaPrice * cartItem.pizzaQuantity;
  };

  const handleDeleteItem = () => {
    handleDelete(cartItem.pizzaId);
  };

  return (
    <div className="cart-item">
      <div className="cart-quantity">
        <button onClick={handleDeleteItem} className="cart-delete-btn">
          X
        </button>
      </div>
      <div className="cart-image">
        <img src={cartItem.pizzaImg} alt={cartItem.pizzaName} />
      </div>

      <div className="cart-description">
        <span className="cart-description-header">{cartItem.pizzaName}</span>
        <span>
          {cartItem.pizzaIng.map((ing, index) => (
            <p key={index}>{ing}</p>
          ))}
        </span>
        <span>
          <p>size: {cartItem.pizzaSize}</p>
        </span>
      </div>

      <div className="cart-quantity">
        <button
          onClick={() => handleDecrease(cartItem.pizzaId)}
          className="minus-btn"
          type="button"
          name="button"
        >
          -
        </button>
        <input
          type="text"
          name="name"
          value={cartItem.pizzaQuantity}
          readOnly
        />
        <button
          onClick={() => handleIncrease(cartItem.pizzaId)}
          className="plus-btn"
          type="button"
          name="button"
        >
          +
        </button>
      </div>

      <div className="total-price">{handleTotalPrice().toFixed(2)}$</div>
    </div>
  );
}
