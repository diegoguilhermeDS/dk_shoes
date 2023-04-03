import { useProducts } from "@/providers/productContext";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";

interface iHeader {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setOpenModal }: iHeader) => {
  const [borderColorInput, setBorderColorInput] = useState("border-orange-400");
  const [inputValue, setInputValue] = useState("");
  const {searchProduct} = useProducts()

  return (
    <header className="bg-white w-full h-20 shadow-sm">
      <div className="max-w-5xl mx-auto h-full flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">DK shoes</h1>
        <div className="h-full flex flex-row justify-between items-center gap-2">
          {/* container de pesquisa */}
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
          {/* Carrinho */}
          <button onClick={() => setOpenModal(true)}>
            <BsCart size={20}/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
