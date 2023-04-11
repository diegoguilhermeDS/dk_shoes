import { createContext, useContext, useEffect, useState } from "react";
import { iCartProvider, iCartContext } from "./cartContextType";
import { iProduct } from "@/interfaces";

const CartContext = createContext({} as iCartContext)

export const CartProvider = ({children}: iCartProvider) => {
    const [cart, setCart] = useState<iProduct[]>([])

    const getCart = () => {
        const cartLocalStorage: iProduct[] = JSON.parse(localStorage.getItem("@cart") || "[]")

        setCart(cartLocalStorage)
    }

    useEffect(() => {
        getCart()
    }, [])
    
    const addProductCart = (product: iProduct) => {
        const oldCart: iProduct[] = JSON.parse(localStorage.getItem("@cart") || "[]")
        
        const findProcuct = oldCart.some((oldProduct: iProduct) => oldProduct.id == product.id)
        
        if(findProcuct){
            const filterCart = oldCart.filter((oldProduct: iProduct) => oldProduct.id !== product.id)
            const addCountProduct = {...product, countCart: product.countCart+=1}

            console.log(addCountProduct);
            
            
            const newCart = [...filterCart, addCountProduct]
            localStorage.setItem("@cart", JSON.stringify(newCart))
            getCart()

        } else {
            const newCart = [...oldCart, product]
            localStorage.setItem("@cart", JSON.stringify(newCart))
            getCart()
        }
    }

    const removeProductCart = (product: iProduct) => {
        const oldCart: iProduct[] = JSON.parse(localStorage.getItem("@cart") || "[]")

        const filterCart = oldCart.filter((oldProduct: iProduct) => oldProduct.id !== product.id)
        if(product.countCart <= 1) {
            localStorage.setItem("@cart", JSON.stringify(filterCart))
            getCart()
        } else {
            const removeCountProduct = {...product, countCart: product.countCart-=1}
            const newCart = [...filterCart, removeCountProduct]
            localStorage.setItem("@cart", JSON.stringify(newCart))
            getCart()
        }
    }


    return (
        <CartContext.Provider value={{
            cart,
            addProductCart,
            removeProductCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);