import { AppProps } from 'next/app'

import ShoppingCard from '../components/elements/ShoppingCard'

import '../../styles/globals.css'

import Navbar from '../components/elements/Navbar'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <ShoppingCard />
      <Component {...pageProps} />
      <div id="modal-root" />
    </>
  )
}

export default MyApp
