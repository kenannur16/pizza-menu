export default function OrderModal({ order, modalOpen }) {
  return (
    <div className={modalOpen ? "modal-overlay" : "hidden"}>
      <div className="modal-content">
        <div className="img-box">
          <img src={order.photoName} alt={order.name} />
        </div>
        <div className="setting">
          <span className="order-header">{order.name}</span>
          <span className="ingredients">
            {order.setIng &&
              order.setIng.map((ing) => (
                <button className="btnIng">{ing}</button>
              ))}
          </span>
          <select className="select" placeholder="select extra ingredients...">
            <option className="option">tomato</option>
            <option className="option">cheese</option>
            <option className="option">orange</option>
          </select>
          <select className="select" placeholder="select pizza size...">
            <option className="option">small</option>
            <option className="option">medium</option>
            <option className="option">xLarge</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// export default function OrderModal({ order, modalOpen }) {
//   console.log(order);
//   return (
//     <div className={modalOpen ? "modal-overlay" : "hidden"}>
//       <div className="modal-content ">
//         <img className="order-img" src={order.photoName} alt={order.name} />
//         <span className="order-header">{order.name}</span>

//         {order.setIng.map((ing) => (
//           <button className="btnIng">{ing}</button>
//         ))}
//       </div>
//     </div>
//   );
// }
