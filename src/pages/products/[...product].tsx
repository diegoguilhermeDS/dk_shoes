/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { iProduct } from "@/interfaces";
import { useProducts } from "@/providers/productContext";


export default function ProductPage() {
  const router = useRouter();
  const productParams = router.query.product;

  const { products } = useProducts();

  const [productCurrent, setProductCurrent] = useState<iProduct>({} as iProduct);

  const getProduct = () => {
    if (typeof productParams === "object") {
      const findProduct = products.find((prod) => prod.id == +productParams[0])
      setProductCurrent(findProduct!)
      console.log(findProduct)
    }
  }

  useEffect(() => {
    getProduct()
    
  }, [productParams])


  return (
    <>
      <Head>
        <title>Product {productParams}</title>
      </Head>
      {typeof productParams === "object" && (
        <main className="grid grid-cols-3 max-w-[1024px] gap-14 mx-auto bg-purple-800 mt-10">
          <section className="col-[1/3] bg-cyan-500 h-full">section image</section>

          <section className="col-[3/_span-3] bg-red-500">
            <h1 className="font-bold text-4xl text-center">{productCurrent.nameItem}</h1>
            <div>
              <h2 className="font-medium text-3xl text-center">R$ {productCurrent.value}</h2>
            </div>
            <div>
              <h2>Selecione o tamanho</h2>
              <ul>
                <li>P</li>
                <li>M</li>
                <li>G</li>
                <li>GG</li>
              </ul>
            </div>
            <div>
              <h2>Cor</h2>
            </div>
            <div>
              <button>Favoritar</button>
              <button>Adicionar ao Carinho</button>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

