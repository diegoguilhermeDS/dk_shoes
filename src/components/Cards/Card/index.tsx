import { iProduct } from "@/interfaces";
import Image from "next/image";
import React, { SetStateAction } from "react";

interface iCard {
  product: iProduct
  setCategorySelected: React.Dispatch<SetStateAction<string>>
}

const Card = ({product, setCategorySelected}: iCard) => {
  return (
    <li
      key={product.id}
      className="bg-white p-4 rounded-xl w-1/4 min-w-250 max-w-250 min-w-[280px] flex flex-col gap-7 border-white border-solid border-1 hover:border-orange-300 hover:border-solid hover:border-1 li-border li-spacing "
    >
      <div>
        <Image
          src={`/img/${product.img}`}
          alt="My Image"
          width={218}
          height={159}
        />
      </div>
      <div className="flex flex-wrap gap-3">
        {product.tag.map((category, index) => (
          <button
            onClick={() => setCategorySelected(category)}
            key={index}
            className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md tag-gap cursor-pointer hover:bg-orange-300 active:bg-orange-700 hover:animate-pulse"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-col justify-between gap-3">
          <h4 className="text-gray-700 text-lg font-bold">
            {" "}
            {product.nameItem}{" "}
          </h4>
          <p className="description-spacing font-light text-sm">
            {product.description}
          </p>
          <p className="price-spacing">
            <strong>
              {product.value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-customGray-200 text-black hover:bg-gray-700 hover:text-white cursor-pointer font-bold py-2 px-4 rounded opacity-90">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
