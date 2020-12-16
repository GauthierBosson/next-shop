import { AppProps } from 'next/app'
import '../../styles/globals.css'

import Navbar from '../components/elements/navbar'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
