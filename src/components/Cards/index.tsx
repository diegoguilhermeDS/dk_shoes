import React from "react";
import Card from "./Card";
import { iUl_Cards, iProduct } from "@/interfaces";
import { useProducts } from "@/providers/productContext";

const Ul_Cards = ({ category, setCategorySelected }: iUl_Cards) => {
  const { products } = useProducts();

  return (
    <> 
      {/* flex flex-wrap justify-center gap-x-[76px] gap-y-10 max-w-[1024px] mt-10 md:justify-center lg:justify-start */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-10">
        {products.length <= 0 ? (
          <li className="flex justify-center items-center w-full mt-10 text-xl font-semibold text-grey">
            Produto não encontrado :(
          </li>
        ) : (
          products.map((product: iProduct, index) =>
            category == "Todos" ? (
              <Card
                key={index}
                product={product}
                setCategorySelected={setCategorySelected}
              />
            ) : (
              product.tag.includes(category) && (
                <Card
                  key={index}
                  product={product}
                  setCategorySelected={setCategorySelected}
                />
              )
            )
          )
        )}
      </ul>
    </>
  );
};

export default Ul_Cards;
