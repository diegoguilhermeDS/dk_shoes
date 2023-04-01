import React, { useState } from "react";
import { data } from "@/database";

interface iProduct {
    id: number;
    img: string;
    nameItem: string;
    description: string;
    value: number;
    addCart: string;
    tag: string[];
    }

const Ul_Cards = () => {

  const [borderColorInput, setBorderColorInput] = useState("border-orange-400");

  return (
    <ul className="flex flex-wrap gap-10 w-full">
      {data.map((product:iProduct, index) => (
        <li key={product.id} className="bg-gray-300 p-4 rounded-xl">
            <div>
                <img src={product.img} alt={product.nameItem} />
            </div>
            <div>
            {product.tag.map((category, index) => (
                <span key={index}>{category}</span>
            ))}
            </div>
            <div>
                <h4>{product.nameItem}</h4>
                <p>{product.description}</p>
                <p>{product.value}</p>
            </div>
            <div>
                <button>Adicionar ao carrinho</button>
            </div>
        </li>
  ))}
    </ul>
  );
};

export default Ul_Cards;