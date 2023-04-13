import { createContext, useContext, useEffect, useState } from "react";
import { iCartProvider, iCartContext } from "./cartContextType";
import { iProduct } from "@/interfaces";

const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProvider) => {
  const [cart, setCart] = useState<iProduct[]>([]);

  const getCart = () => {
    const cartLocalStorage: iProduct[] = JSON.parse(
      localStorage.getItem("@cart") || "[]"
    );

    setCart(cartLocalStorage);
  };

  useEffect(() => {
    getCart();
  }, []);

  const addProductCart = (product: iProduct) => {
    const oldCart: iProduct[] = JSON.parse(
      localStorage.getItem("@cart") || "[]"
    );

    const productIndex = oldCart.findIndex(
      (oldProduct: iProduct) => oldProduct.id == product.id
    );

    if (productIndex !== -1) {
      const updatedProduct = {
        ...oldCart[productIndex],
        countCart: oldCart[productIndex].countCart + 1,
      };
      oldCart.splice(productIndex, 1, updatedProduct);
      localStorage.setItem("@cart", JSON.stringify(oldCart));
      getCart();
    } else {
      const addCountProduct = { ...product, countCart: 1 };
      oldCart.push(addCountProduct);
      localStorage.setItem("@cart", JSON.stringify(oldCart));
      getCart();
    }
  };

  const removeProductCart = (product: iProduct) => {
    const oldCart: iProduct[] = JSON.parse(
      localStorage.getItem("@cart") || "[]"
    );

    const productIndex = oldCart.findIndex(
      (oldProduct: iProduct) => oldProduct.id == product.id
    );

    if (productIndex !== -1 && oldCart[productIndex].countCart > 1) {
      const updatedProduct = {
        ...oldCart[productIndex],
        countCart: oldCart[productIndex].countCart - 1,
      };
      oldCart.splice(productIndex, 1, updatedProduct);
      localStorage.setItem("@cart", JSON.stringify(oldCart));
      getCart();
    } else {
      oldCart.splice(productIndex, 1);
      localStorage.setItem("@cart", JSON.stringify(oldCart));
      getCart();
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductCart,
        removeProductCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
