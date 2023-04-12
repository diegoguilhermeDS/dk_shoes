import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import React from 'react'

export default function ProductPage() {
    const router = useRouter()
    const { name } = router.query

  return (
    <>
    <Head>
        <title>Product {name}</title>
    </Head>
    <div>Produto: {name}</div>
    </>
  )
}

/* export const getServerSideProps: GetServerSideProps = async (context) => {
    const { name } = context.query
    
  
    const revalidatingTime = 60*60*12
    return {
      props: {
        
      },
      revalidate: revalidatingTime
    }
  } */