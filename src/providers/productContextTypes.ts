import { iProduct } from "@/interfaces"
import { SetStateAction } from "react"

interface iProductContext {
    products: iProduct[],
    searchProduct: (inputValue: string) => void,
    categorySelected: string,
    setCategorySelected: React.Dispatch<SetStateAction<string>>,
    setOldCategory: React.Dispatch<SetStateAction<string>>,
    likes: iProduct[],
    addLike: (product: any) => void,
    removeLike: (productId: any) => void,
    currentModal: string,
    setCurrentModal: React.Dispatch<SetStateAction<string>>,
    openModal: boolean,
    setOpenModal: React.Dispatch<SetStateAction<boolean>>
}

interface iProductProvider {
    children: React.ReactNode
}

export type {
    iProductContext,
    iProductProvider
}