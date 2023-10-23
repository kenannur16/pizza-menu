export default function Order({ orderModalOpen }) {
  return (
    <div className={orderModalOpen ? "modal-overlay" : "hidden"}>
      <div className="modal-content">
        <div className="order-message">
          We have received your order! Enjoy your meal!
        </div>
        <header className="cart-title">
          <h2>DOWNHILLS Pizza</h2>
        </header>
      </div>
    </div>
  );
}
