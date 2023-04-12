import { useProducts } from "@/providers/productContext";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";

interface iHeader {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setOpenModal }: iHeader) => {
  const [borderColorInput, setBorderColorInput] = useState("border-orange-400");
  const [inputValue, setInputValue] = useState("");
  const {searchProduct} = useProducts()
  const { setCurrentModal } = useProducts();
  

  return (
    <header className="bg-white w-full h-28 md:h-20 shadow-sm md:px-3">
      <div className="max-w-5xl w-full mx-auto h-full flex flex-col justify-center items-center gap-2 md:flex-row md:justify-between">
        <h1 className="text-3xl font-bold w-[90%] text-start">DK shoes</h1>
        <div className="md:h-full flex flex-row justify-between items-center gap-6">
          <div
            className={`max-w-xs w-full h-10 flex flex-row justify-between items-center ${borderColorInput} border-2 border-solid rounded-md p-2`}
          >
            <input
              type="text"
              placeholder="Pesquisar"
              className="outline-none"
              onMouseDown={() => setBorderColorInput("border-gray-400")}
              onBlur={() => setBorderColorInput("border-orange-400")}
              onChange={(e) => {
                setInputValue(e.target.value)
                searchProduct(e.target.value)
              }}
            />
            <button onClick={() => searchProduct(inputValue)}>
              <BiSearch />
            </button>
          </div>
          {/* liked */}
          <AiFillHeart size={35} color="#ea580c" onClick={() => {
            setOpenModal(true)
            setCurrentModal("favorite")
          }}/>
          {/* Carrinho */}
          <button onClick={() => {
            setOpenModal(true)
            setCurrentModal("cart")
          }}>
            <HiShoppingCart size={28} color="#ea580c"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
