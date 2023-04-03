import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Main_Container from "@/components/MainContainer";
import { ProductProvider } from "@/providers/productContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <Main_Container>
        <Component {...pageProps} />
      </Main_Container>
    </ProductProvider>
  );
}
