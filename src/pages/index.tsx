import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps, GetStaticProps } from "next";
import { api } from "./services/api";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>Dk-shoes</title>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
      <div className="flex flex-col gap-7 w--full items-center bg-red-500">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {data} = await api.get('')

  const revalidatingTime = 60*60*12
  return {
    props: {
      
    },
    revalidate: revalidatingTime
  }
}