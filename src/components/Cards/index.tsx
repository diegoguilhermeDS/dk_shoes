import React, { useState } from "react";
import { data } from "@/database";
import Image from "next/image";

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
    console.log(data.map(product => `/src/img/${product.img}`))
  return (
    <>
     <div className=" max-w-950" >
        <ul className="flex flex-wrap gap-10 w-full mt-5 justify-center">
            {data.map((product:iProduct, index) => (
               <li key={product.id} className="bg-white p-4 rounded-xl w-1/4 min-w-250 max-w-250 min-w-[280px] flex flex-col gap-7 border-white border-solid border-1 hover:border-orange-300 hover:border-solid hover:border-1 li-border li-spacing">
                    <div>
                        <Image src={`/img/${product.img}`} alt="My Image" width={218} height={159} />        
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {product.tag.map((category, index) => (
                            <span key={index} className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md tag-gap">{category}</span>
                        ))}
                    </div>
                    <div className="flex flex-col justify-between gap-5">
                        <div className="flex flex-col justify-between gap-3">
                            <h4 className="text-gray-700 text-lg font-bold"> {product.nameItem} </h4>
                            <p className="description-spacing">{product.description}</p>
                            <p className="price-spacing"><strong>R$ {product.value}</strong></p>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-customGray-200 text-black hover:bg-gray-700 hover:text-white font-bold py-2 px-4 rounded opacity-90">
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </>
  );
};

export default Ul_Cards;