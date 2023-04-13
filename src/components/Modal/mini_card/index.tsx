import React from 'react'
import { iProduct } from '@/interfaces'
import Image from "next/image";
import { useCart } from '@/providers/cartProvider/cartContext';

interface iMiniCardProps{
    product: iProduct
}

export const MiniCard = ({product}: iMiniCardProps) => {

  const { addProductCart, removeProductCart } = useCart();

  return (
    <li key={product.id} className="flex items-center gap-2 p-2">
      <div className="flex items-center gap-2">
        <Image
            src={`/img/${product.img}`}
            alt="My Image"
            width={10}
            height={10}
            className="w-10 h-10 object-cover"
        />
        <span className="truncate" style={{width: '150px', maxWidth: '150px'}}>{product.nameItem}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <button
            className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center"
            onClick={() => removeProductCart(product)}
          >
            -
          </button>
          <span style={{width: '20px', maxWidth: '20px', textAlign: "center"}}>{product.countCart}</span>
          <button
            className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center"
            onClick={() => addProductCart(product)}
          >
            +
          </button>
        </div>

        <span className="truncate" style={{width: '80px', maxWidth: '80px'}}>{product.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}</span>
      </div>
    </li>
  )
}
