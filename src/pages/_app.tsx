import { AppProps } from 'next/app'

import ShoppingCard from '../components/elements/ShoppingCard'
import Navbar from '../components/elements/Navbar'
import { Login } from '../components/elements/Modals'
import '../../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <ShoppingCard />
      <Component {...pageProps} />
      <div id="modal-root" />
      <Login />
    </>
  )
}

export default MyApp
