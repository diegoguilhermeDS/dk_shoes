import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


library.add(faCoffee)
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
