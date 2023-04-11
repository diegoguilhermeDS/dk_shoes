import { createContext, useContext, useEffect, useState } from "react";
import { iProductContext, iProductProvider } from "./productContextTypes";
import { data } from "@/database";
import { iProduct } from "@/interfaces";
import { CartProvider } from "./cartProvider/cartContext";

const ProductContext = createContext({} as iProductContext);

export const ProductProvider = ({ children }: iProductProvider) => {
  const [products, setProducts] = useState(data.map((product) => {
    const countCart = 0
    const newProduct = {...product, countCart}

    return newProduct
  }));
  const [categorySelected, setCategorySelected] = useState("Todos");
  const [oldCategory, setOldCategory] = useState("Todos");
  const [likes, setLikes] = useState<iProduct[]>([]);
  const [currentModal, setCurrentModal] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const addLike = (product: iProduct) => {
    setLikes((prevLikes) => [...prevLikes, product]);
  };

  const removeLike = (productId: number) => {
    setLikes((prevLikes) =>
      prevLikes.filter((product) => product.id !== productId)
    );
  };

  useEffect(() => {
    if (products.length <= 0) {
      setCategorySelected("vazio");
    }
  }, [products]);

  const searchProduct = (inputValue: string) => {
    if (inputValue == "") {
      setProducts(data.map((product) => {
        const countCart = 0
        const newProduct = {...product, countCart}

        return newProduct
      }));
      setCategorySelected(oldCategory);
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
        setOldCategory,
        likes,
        addLike,
        removeLike,
        currentModal,
        setCurrentModal,
        openModal,
        setOpenModal
      }}
    >
      <CartProvider>{children}</CartProvider>
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
