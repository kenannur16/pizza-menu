import { useState } from "react";
import ingData from "./ingData.json";

export default function OrderModal({ order, modalOpen }) {
  const [click, setClick] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

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

        {/*select extra ingredients*/}
        <button
          className="btn-select-box"
          onClick={() => (click ? setClick(false) : setClick(true))}
        >
          Select Extra Ingredients
        </button>

        <div className={click ? "ing-box" : "hidden"}>
          {ingData.map((ing) => order.setIng &&
            !order.setIng.includes(ing.name) ? (
              <button
                className={
                  isSelect ? `${"btnIngSelected"}` : `${"btnIngBefore"}`
                }
                onClick={() =>
                  isSelect ? setIsSelect(false) : setIsSelect(true)
                }
              >
                {ing.name} {ing.price} $
              </button>
            ) : null
          )}
        </div>

        {/* <button className="btn-select-box">select pizza size</button> */}
        <h1>pizza size</h1>
        <hr />

        <div className="size-box">
          <label class="custom-checkbox-label">
            <input type="radio" name="option" value="option1" /> Small
          </label>
          <label class="custom-checkbox-label">
            <input type="radio" name="option" value="option1" /> Medium
          </label>
          <label class="custom-checkbox-label">
            <input type="radio" name="option" value="option1" /> Large
          </label>
        </div>

        <span className="order-header">12.45 $</span>

        {/*BUTTONS*/}
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
