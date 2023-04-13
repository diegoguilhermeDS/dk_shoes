import { useProducts } from "@/providers/productContext";
import React from "react";
import { categories_data } from "../../database";

const NavCategory = () => {
  const { categorySelected, setCategorySelected, setOldCategory } =
    useProducts();

  return (
    <ul className="mx-auto flex w-full flex-row justify-center gap-2 overflow-x-auto bg-orange-500 px-2 md:gap-8">
      {categories_data.map((category, index) => (
        <li
          key={index}
          onClick={() => {
            setCategorySelected(category);
            setOldCategory(category);
          }}
          className={`${
            category === categorySelected
              ? "bg-gray-900 font-semibold "
              : "bg-orange-500 font-thin"
          }  text-white px-2 py-1 rounded-md hover:bg-orange-300 selected:bg-red-400 cursor-pointer transition-colors ease-in hover:animate-pulse active:bg-orange-700`}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default NavCategory;
