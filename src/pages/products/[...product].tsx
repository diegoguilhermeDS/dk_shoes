import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import React from "react";

export default function ProductPage() {
  const router = useRouter();
  const product = router.query.product;

  console.log(typeof product === "object");

  return (
    <>
      <Head>
        <title>Product {product}</title>
      </Head>
      {typeof product === "object" && (
        <div className="text-xl font-bold text-center mt-4">
          Produto: {product[1]} - id: {product[0]}
        </div>
      )}
    </>
  );
}
/* 
  - products
    - product_id
      - product_name
*/
/* export const getServerSideProps: GetServerSideProps = async (context) => {
    const { name } = context.query
    
  
    const revalidatingTime = 60*60*12
    return {
      props: {
        
      },
      revalidate: revalidatingTime
    }
  } */
