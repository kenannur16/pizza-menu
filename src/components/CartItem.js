export default function CartItem({ cartItem }) {
  return (
    <div className="cart-item">
      <div className="cart-quantity">
        <button className="cart-delete-btn">X</button>
      </div>
      <div className="cart-image">
        <img src={cartItem.pizzaImg} alt={cartItem.pizzaName} />
      </div>

      <div className="cart-description">
        <span className="cart-description-header">{cartItem.pizzaName}</span>
        <span>
          {cartItem.pizzaIng.map((ing) => (
            <p>{ing}</p>
          ))}
        </span>
        <span>
          <p>size: {cartItem.pizzaSize}</p>
        </span>
      </div>

      <div className="cart-quantity">
        <button className="plus-btn" type="button" name="button">
          <img src="plus.svg" alt="" />
        </button>
        <input type="text" name="name" value="1" />
        <button className="minus-btn" type="button" name="button">
          <img src="minus.svg" alt="" />
        </button>
      </div>

      <div className="total-price">{cartItem.pizzaPrice}$</div>
    </div>
  );
}

/* <img src={cartItem.pizzaImg} alt={cartItem.pizzaName} />
      <div className="cart-Item">
        <h3>{cartItem.pizzaName}</h3>
        <div className="cart-Item-group"></div>

        <span>
          {cartItem.pizzaPrice}
          <button className="btnAdd">Delete</button>
        </span>
      </div> */
