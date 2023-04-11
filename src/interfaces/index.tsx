import { SetStateAction } from "react";

export interface iMainContainer {
    children: React.ReactNode
}

export interface iProduct {
    id: number;
    img: string;
    nameItem: string;
    description: string;
    value: number;
    addCart: string;
    tag: string[];
    countCart: number
  }
  
export  interface iUl_Cards {
    category: string;
    setCategorySelected: React.Dispatch<SetStateAction<string>>;
  }
