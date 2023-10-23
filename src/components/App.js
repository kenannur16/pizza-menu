import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import OrderModal from "./OrderModal";
import Cart from "./Cart";
import Order from "./Order";
import { useState, useEffect } from "react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [order, setOrder] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (extraIng, size, pizza) => {
    let cost = 0;
    if (size !== "small") {
      if (size === "medium") {
        cost += 3;
      } else if (size === "large") {
        cost += 6;
      }
    }

    extraIng.map((item) => (cost += item.price));

    const extra = extraIng.map((item) => item.name);

    const pizzaInCart = {
      pizzaId: pizza.pizzaId,
      pizzaName: pizza.pizzaName,
      pizzaIng: pizza.setIng.concat(extra),
      pizzaSize: size,
      pizzaPrice: pizza.price + cost,
      pizzaImg: pizza.photoName,
      pizzaQuantity: 1,
    };

    setCartItems([...cartItems, pizzaInCart]);
  };

  const handleIncrease = (pizzaId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.pizzaId === pizzaId) {
        return { ...item, pizzaQuantity: item.pizzaQuantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDecrease = (pizzaId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.pizzaId === pizzaId && item.pizzaQuantity > 1) {
        return { ...item, pizzaQuantity: item.pizzaQuantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDelete = (pizzaId) => {
    const updatedCart = cartItems.filter((item) => item.pizzaId !== pizzaId);
    setCartItems(updatedCart);
  };

  function getOrder(product) {
    setOrder(product);
  }

  function openModal(e) {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function openCart(e) {
    setCartModalOpen(true);
  }

  function closeCart() {
    setCartModalOpen(false);
  }

  function openOrder() {
    setOrderModalOpen(true);
  }

  function closeOrder() {
    setOrderModalOpen(false);
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalOpen && e.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };

    const handleEscKey = (e) => {
      if (modalOpen && e.key === "Escape") {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [modalOpen]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cartModalOpen && e.target.classList.contains("modal-overlay")) {
        closeCart();
      }
    };

    const handleEscKey = (e) => {
      if (cartModalOpen && e.key === "Escape") {
        closeCart();
      }
    };

    if (cartModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [cartModalOpen]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (orderModalOpen && e.target.classList.contains("modal-overlay")) {
        closeOrder();
      }
    };

    const handleEscKey = (e) => {
      if (orderModalOpen && e.key === "Escape") {
        closeOrder();
      }
    };

    if (orderModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [orderModalOpen]);

  return (
    <div className="container">
      <Header />
      <Menu getOrder={getOrder} openModal={openModal} />
      <Footer openCart={openCart} />
      <OrderModal
        order={order}
        modalOpen={modalOpen}
        addToCart={addToCart}
        openOrder={openOrder}
      />
      <Cart
        cartModalOpen={cartModalOpen}
        cartItems={cartItems}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleDelete={handleDelete}
        openOrder={openOrder}
      />
      <Order orderModalOpen={orderModalOpen} />
    </div>
  );
}
