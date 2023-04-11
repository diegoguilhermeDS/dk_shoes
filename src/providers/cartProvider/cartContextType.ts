import { iProduct } from "@/interfaces"

interface iCartContext {
    cart: iProduct[],
    addProductCart: (product: iProduct) => void,
    removeProductCart: (idProduct: iProduct) => void
}

interface iCartProvider {
    children: React.ReactNode
}

export type {
    iCartContext,
    iCartProvider
}