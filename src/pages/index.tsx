import { GetStaticProps } from 'next'
import { Product } from '@prisma/client'

import prisma from '../libs/prisma'
import ProductsGrid from '../components/layouts/Home/ProductsGrid'
import {
  useShoppingCard,
  useProductDetails,
  useLogin,
  useSignup,
} from '../libs/stores'

const Home: React.FC<{ products: Product[] }> = ({ products }) => {
  const toggleShoppingCard = useShoppingCard((state) => state.toggleShoppingCard)
  const toggleLogin = useLogin((state) => state.toggleLogin)
  const toggleProductDetails = useProductDetails(
    (state) => state.toggleProductDetails
  )
  const toggleSignup = useSignup((state) => state.toggleSignup)
  return (
    <>
      <div className="overflow-x-hidden relative min-h-screen">
        <ProductsGrid products={products} />
        <button onClick={() => toggleShoppingCard()}>Card</button>
        <button onClick={() => toggleProductDetails()}>Product</button>
        <button onClick={() => toggleLogin()}>Login</button>
        <button onClick={() => toggleSignup()}>Signup</button>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await prisma.product.findMany()

  return {
    props: {
      products,
    },
    revalidate: 1,
  }
}

export default Home
