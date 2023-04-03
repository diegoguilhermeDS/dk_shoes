import { createContext, useContext, useEffect, useState } from "react";
import { iProductContext, iProductProvider } from "./productContextTypes";
import { data } from "@/database";
import { iProduct } from "@/interfaces";

const ProductContext = createContext({} as iProductContext);

export const ProductProvider = ({ children }: iProductProvider) => {
  const [products, setProducts] = useState(data);
  const [categorySelected, setCategorySelected] = useState("Todos");
  const [oldCategory, setOldCategory] = useState("Todos");

  useEffect(() => {
    if (products.length <= 0) {
      setCategorySelected("vazio");
    }
  }, [products]);

  const searchProduct = (inputValue: string) => {
    if (inputValue == "") {
      setProducts(data);
      setCategorySelected(oldCategory)
    } else {
      const filteredProducts = products.filter((product: iProduct) =>
        product.nameItem
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase())
      );

      setProducts(filteredProducts);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        searchProduct,
        categorySelected,
        setCategorySelected,
        setOldCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
