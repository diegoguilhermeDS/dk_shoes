import { useProducts } from "@/providers/productContext";
import React from "react";

const FavoritesModalContent = () => {
  const { setOpenModal } = useProducts();

  return (
    <>
      <div className="w-full h-full bg-gray-opacity fixed top-0 flex justify-center items-center">
        <div className="w-96 bg-white rounded relative rounded-md overflow-hidden animate-animationOpenModal">
          <button
            onClick={() => setOpenModal(false)}
            className="absolute top-2 right-3 font-semibold text-gray-100"
          >
            X
          </button>
          <header className="w-full bg-orange-400 p-2 flex items-center justify-center">
            <h2 className="font-semibold text-white text-lg">
              Lista de Favoritos
            </h2>
          </header>
          <section className="min-h-1"></section>
          <section className="bg-gray-900 w-full p-2 flex flex-col gap-2">
            <div>
              <h3 className="text-white font-semibold text-sm">Quantidade:</h3>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Total:</h3>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FavoritesModalContent;
