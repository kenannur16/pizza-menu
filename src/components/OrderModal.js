export default function OrderModal({ order, modalOpen }) {
  return (
    <div className={modalOpen ? "modal-overlay" : "hidden"}>
      <div className="modal-content ">
        <img className="order-img" src={order.photoName} alt={order.name} />
        <span className="order-header">{order.name}</span>
      </div>
    </div>
  );
}
