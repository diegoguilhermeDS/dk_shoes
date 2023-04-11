import React, { ReactNode } from "react";
import CartModalContent from "./Cart";
import FavoritesModalContent from "./Favorites";
import { useProducts } from "@/providers/productContext";

const Modal = () => {
  const { currentModal } = useProducts();

  return (
    <>
      <div className="w-full h-full bg-gray-opacity fixed top-0 flex justify-center items-center">
        {currentModal === "cart" ? (
          <CartModalContent />
        ) : (
          <FavoritesModalContent />
        )}
      </div>
    </>
  );
};

export default Modal;
