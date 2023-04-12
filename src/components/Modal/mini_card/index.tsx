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
    <li key={product.id} className="flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <Image
            src={`/img/${product.img}`}
            alt="My Image"
            width={10}
            height={10}
            className="w-10 h-10 object-cover"
        />
        <span>{product.nameItem}</span>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center">
          <button
            className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center"
            onClick={() => removeProductCart(product)}
          >
            -
          </button>
          <span className="mx-2">{product.countCart}</span>
          <button
            className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center"
            onClick={() => addProductCart(product)}
          >
            +
          </button>
        </div>

        <span>{product.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}</span>
      </div>
    </li>
  )
}
