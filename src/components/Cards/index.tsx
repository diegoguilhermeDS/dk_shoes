import React from "react";
import Card from "./Card";
import { iUl_Cards, iProduct } from "@/interfaces";
import { useProducts } from "@/providers/productContext";

const Ul_Cards = ({ category, setCategorySelected }: iUl_Cards) => {
  const { products } = useProducts();

  return (
    <>
      <div className=" max-w-950">
        <ul className="flex flex-wrap gap-x-20 gap-y-10 w-full mt-10">
          {products.length <= 0 ? (
            <li className="flex justify-center items-center w-full mt-10 text-xl font-semibold text-grey">Produto não encontrado :(</li>
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
      </div>
    </>
  );
};

export default Ul_Cards;
