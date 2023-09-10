import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import OrderModal from "./OrderModal";
import { useState, useEffect } from "react";

export default function App() {
  const [order, setOrder] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  function getOrder(product) {
    setOrder(product);
  }

  function openModal(e) {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
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

  return (
    <div className="container">
      <Header />
      <Menu getOrder={getOrder} openModal={openModal} />
      <Footer />
      <OrderModal order={order} modalOpen={modalOpen} />
    </div>
  );
}
