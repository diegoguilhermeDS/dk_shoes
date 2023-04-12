import Head from "next/head";
import { Inter } from "next/font/google";
import { GetServerSideProps, GetStaticProps } from "next";
import { api } from "./services/api";
import Ul_Cards from "@/components/Cards";
import { useProducts } from "@/providers/productContext";
import NavCategory from "@/components/NavCategory";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { categorySelected, setCategorySelected } = useProducts();

  return (
    <>
      <Head>
        <title>Dk-shoes</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className="">
        <section>
          <NavCategory/>
          <div className="max-w-5xl mx-auto mb-4 px-4">
            <Ul_Cards
              category={categorySelected}
              setCategorySelected={setCategorySelected}
            />
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
