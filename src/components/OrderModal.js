import { useState } from "react";
import ingData from "./ingData.json";

export default function OrderModal({ order, modalOpen }) {
  const [click, setClick] = useState(false);
  return (
    <div className={modalOpen ? "modal-overlay" : "hidden"}>
      <div className="modal-content">
        <div className="img-box">
          <img src={order.photoName} alt={order.name} />
        </div>

        <span className="order-header">{order.name}</span>

        <span className="ing-box">
          {order.setIng &&
            order.setIng.map((ing) => (
              <button className="btnIng">{ing}</button>
            ))}
        </span>

        <button
          className="btn-select-box"
          onClick={() => (click ? setClick(false) : setClick(true))}
        >
          Select Extra Ingredients
        </button>
        <div className={click ? "extra-Ing" : "hidden"}>
          {ingData.map((ing) => (
            <div>
              <input type="checkbox" name={ing.id} value={ing.name} />
              <label for={ing.name}>{ing.name}</label>
              <span>{ing.price} $</span>
            </div>
          ))}
        </div>

        <select className="btn-select-box" placeholder="select pizza size...">
          <option className="option">select size...</option>
          <option className="option">small</option>
          <option className="option">medium</option>
          <option className="option">xLarge</option>
        </select>

        <span className="order-header">12.45 $</span>
        <div className="btn-container">
          <button className="btnSetting">Order Now!</button>
          <button className="btnSetting">Add to CART</button>
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
