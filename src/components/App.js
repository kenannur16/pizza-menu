import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import OrderModal from "./OrderModal";
import Cart from "./Cart";
import { useState, useEffect } from "react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [order, setOrder] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems([...cartItems, newItem]);
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

  return (
    <div className="container">
      <Header />
      <Menu getOrder={getOrder} openModal={openModal} />
      <Footer openCart={openCart} />
      <OrderModal order={order} modalOpen={modalOpen} addToCart={addToCart} />
      <Cart cartModalOpen={cartModalOpen} cartItems={cartItems} />
    </div>
  );
}
