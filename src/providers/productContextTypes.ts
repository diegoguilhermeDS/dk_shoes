import { iProduct } from "@/interfaces"
import { SetStateAction } from "react"

interface iProductContext {
    products: iProduct[],
    searchProduct: (inputValue: string) => void,
    categorySelected: string,
    setCategorySelected: React.Dispatch<SetStateAction<string>>,
    setOldCategory: React.Dispatch<SetStateAction<string>>
}

interface iProductProvider {
    children: React.ReactNode
}

export type {
    iProductContext,
    iProductProvider
}