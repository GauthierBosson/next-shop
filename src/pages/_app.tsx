import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import ShoppingCard from '../components/elements/ShoppingCard'
import Navbar from '../components/elements/Navbar'
import { Login, Signup } from '../components/elements/Modals'
import '../../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <ShoppingCard />
      <Component {...pageProps} />
      <div id="modal-root" />
      <Login />
      <Signup />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default MyApp
