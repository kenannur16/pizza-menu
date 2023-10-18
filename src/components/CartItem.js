export default function CartItem({ cartItem }) {
  return (
    <li className="pizza">
      <img src={cartItem.pizzaImg} alt={cartItem.pizzaName} />
      <div>
        <h3>{cartItem.pizzaName}</h3>
        <p>{cartItem.pizzaIng}</p>
        <span>
          {cartItem.pizzaPrice}
          <button className="btnAdd">Delete</button>
        </span>
      </div>
    </li>
  );
}
