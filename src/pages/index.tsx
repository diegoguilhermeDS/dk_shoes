import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps, GetStaticProps } from "next";
import { api } from "./services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { categories_data } from "../database"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [borderColorInput, setBorderColorInput] = useState("border-orange-400");
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Head>
        <title>Dk-shoes</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <header className="bg-white w-full h-20 shadow-sm mb-10">
        <div className="max-w-5xl mx-auto h-full flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">DK shoes</h1>
          <div className="h-full flex flex-row justify-between items-center">
            {/* container de pesquisa */}
            <div
              className={`max-w-xs w-full h-10 flex flex-row justify-between items-center ${borderColorInput} border-2 border-solid rounded-md p-2`}
            >
              <input
                type="text"
                placeholder="Pesquisar"
                className="outline-none"
                onMouseDown={() => setBorderColorInput("border-gray-400")}
                onBlur={() => setBorderColorInput("border-orange-400")}
              />
              <button><FontAwesomeIcon icon="coffee" /></button>
            </div>
            {/* Carrinho */}
            <button onClick={() => setOpenModal(!openModal)} >carrinho</button>
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto">
        <section>
          <ul className="flex flex-row justify-around max-w-3xl mx-auto">
            {categories_data.map((category, index) => <li key={index} className="bg-gray-300 px-2 py-0.5 rounded-xl">{category}</li>)}
          </ul>
        </section>
      </main>
      {openModal && <h1>Modal Aberto!</h1>}
    </>
  );
}

/* export const getServerSideProps: GetServerSideProps = async (context) => {
  // const {data} = await api.get('')

  
  const revalidatingTime = 60*60*12
  return {
    props: {
      
    },
    revalidate: revalidatingTime
  }
} */
