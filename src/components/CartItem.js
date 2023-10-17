export default function CartItem({ item }) {
  return (
    <div>
      {item.map((pizza) => (
        <h3>
          {pizza.pizzaName} {pizza.size}
        </h3>
      ))}
    </div>
  );
}
