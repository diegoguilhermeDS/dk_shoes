import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps, GetStaticProps } from "next";
import { api } from "./services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { categories_data } from "../database";
import Ul_Cards from "@/components/Cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [categorySelected, setCategorySelected] = useState("Todos");

  return (
    <>
      <Head>
        <title>Dk-shoes</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <main className="max-w-5xl mx-auto">
        <section>
          <ul className="flex flex-row justify-around max-w-3xl mx-auto">
            {categories_data.map((category, index) => (
              <li
                key={index}
                onClick={() => setCategorySelected(category)}
                className={`${
                  category === categorySelected
                    ? "bg-orange-500 "
                    : "bg-gray-400"
                } font-semibold text-white px-2 py-1 rounded-md hover:bg-orange-300 selected:bg-red-400 cursor-pointer transition-colors ease-in hover:animate-pulse active:bg-orange-700`}
              >
                {category}
              </li>
            ))}
          </ul>
          <Ul_Cards/>
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
