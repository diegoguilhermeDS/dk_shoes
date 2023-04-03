import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps, GetStaticProps } from "next";
import { api } from "./services/api";
import { useEffect, useState } from "react";
import { categories_data } from "../database";
import Ul_Cards from "@/components/Cards";
import { useProducts } from "@/providers/productContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  const {categorySelected, setCategorySelected, setOldCategory} = useProducts()

  return (
    <>
      <Head>
        <title>Dk-shoes</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className="">
        <section>
          <ul className="flex flex-row mx-auto w-full bg-orange-500 justify-center gap-8">
            {categories_data.map((category, index) => (
              <li
                key={index}
                onClick={() => {
                  setCategorySelected(category)
                  setOldCategory(category)
                }}
                className={`${
                  category === categorySelected
                    ? "bg-gray-900 font-semibold "
                    : "bg-orange-500 font-thin"
                }  text-white px-2 py-1 rounded-md hover:bg-orange-300 selected:bg-red-400 cursor-pointer transition-colors ease-in hover:animate-pulse active:bg-orange-700`}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className="max-w-5xl mx-auto mb-4">
            <Ul_Cards category={categorySelected} setCategorySelected={setCategorySelected}/>
          </div>
        </section>
      </main>
    </>
  );
}

/* export const getServerSideProps: GetServerSideProps = async (context) => {
  // const {data} = await api.get('')

  
  const revalidatingTime = 60*60*12
  return {
    props: {
      revalidatingTime
    },
    revalidate: revalidatingTime
  }
} */
