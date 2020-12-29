import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import ShoppingCard from '../components/elements/ShoppingCard'
import Navbar from '../components/elements/Navbar'
import { Login, Signup } from '../components/elements/Modals'
import '../../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <ShoppingCard />
      <Component {...pageProps} />
      <div id="modal-root" />
      <Login />
      <Signup />
    </QueryClientProvider>
  )
}

export default MyApp
