import { useEffect, useState } from "react";
import ingData from "./ingData.json";

export default function OrderModal({ order, modalOpen, addToCart, openOrder }) {
  const [click, setClick] = useState(false);
  const [isSelect, setIsSelect] = useState([]);
  const [selectedSize, setSelectedSize] = useState("small");
  const [currentPrice, setCurrentPrice] = useState(0);

  const resetSettings = () => {
    setIsSelect([]);
    setSelectedSize("");
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalOpen && e.target.classList.contains("modal-overlay")) {
        resetSettings();
      }
    };

    const handleEscKey = (e) => {
      if (modalOpen && e.key === "Escape") {
        resetSettings();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [modalOpen]);

  useEffect(() => {
    const price =
      order.price + isSelect.reduce((acc, curr) => acc + curr.price, 0);
    if (selectedSize === "medium") {
      setCurrentPrice((price + 3).toFixed(2));
    } else if (selectedSize === "large") {
      setCurrentPrice((price + 6).toFixed(2));
    } else {
      setCurrentPrice(price.toFixed(2));
    }
  }, [isSelect, selectedSize, order.price]);

  const handleButtonClick = (id, name, price) => {
    if (isSelect.some((button) => button.id === id)) {
      const updatedButtons = isSelect.filter((button) => button.id !== id);
      setIsSelect(updatedButtons);
    } else {
      setIsSelect([...isSelect, { id, name, price }]);
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className={modalOpen ? "modal-overlay" : "hidden"}>
      <div className="modal-content">
        <div className="img-box">
          <img src={order.photoName} alt={order.name} />
        </div>

        <span className="order-header">{order.pizzaName}</span>

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
          {ingData.map((ing) =>
            order.setIng && !order.setIng.includes(ing.name) ? (
              <button
                key={ing.id}
                className={
                  isSelect.some((button) => button.id === ing.id)
                    ? `${"btnIngSelected"}`
                    : `${"btnIngBefore"}`
                }
                onClick={() => handleButtonClick(ing.id, ing.name, ing.price)}
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
            <input
              type="radio"
              name="option"
              value="small"
              checked={selectedSize === "small"}
              onChange={handleSizeChange}
            />{" "}
            Small
          </label>
          <label class="custom-checkbox-label">
            <input
              type="radio"
              name="option"
              value="medium"
              checked={selectedSize === "medium"}
              onChange={handleSizeChange}
            />{" "}
            Medium
          </label>
          <label class="custom-checkbox-label">
            <input
              type="radio"
              name="option"
              value="large"
              checked={selectedSize === "large"}
              onChange={handleSizeChange}
            />{" "}
            Large
          </label>
        </div>

        <span className="order-header">{currentPrice} $</span>

        {/*BUTTONS*/}
        <div className="btn-container">
          <button onClick={() => openOrder()} className="btnSetting">
            Order Now!
          </button>
          <button
            className="btnSetting"
            onClick={(e) => addToCart(isSelect, selectedSize, order)}
          >
            Add to CART
          </button>
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
