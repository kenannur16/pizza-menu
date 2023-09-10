export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>
            We are open until {closeHour}:00. Come visit us or order online!
          </p>
        ) : (
          <p>
            We are happy to welcome you between {openHour}:00 and {closeHour}
            :00.
          </p>
        )}

        <button className="btn">CART</button>
      </div>
    </footer>
  );
}
