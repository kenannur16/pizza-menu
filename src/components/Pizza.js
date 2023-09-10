export default function Pizza({ pizzaObj, openModal, getOrder }) {
  //if (.pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "SOLD OUT" : `${pizzaObj.price}$`}
          <button
            className="btnAdd"
            onClick={(e) => {
              getOrder(pizzaObj);
              openModal(e);
            }}
          >
            Order
          </button>
        </span>
      </div>
    </li>
  );
}
