import React, { useState } from "react";

interface iHeader {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({setOpenModal}: iHeader) => {
  const [borderColorInput, setBorderColorInput] = useState("border-orange-400");

  return (
    <header className="bg-white w-full h-20 shadow-sm mb-10">
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
            />
            <button>Pesquisar</button>
          </div>
          {/* Carrinho */}
          <button onClick={() => setOpenModal(true)}>carrinho</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
