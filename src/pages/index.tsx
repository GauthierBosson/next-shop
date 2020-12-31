import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { Product } from '@prisma/client'

import prisma from '../libs/prisma'
import ProductsGrid from '../components/layouts/Home/ProductsGrid'
import { ProductDetails } from '../components/elements/Modals'
import { useShoppingCard, useLogin, useSignup } from '../libs/stores'

const Home: React.FC<{ products: Product[]; slugsArray: [string] }> = ({
  products,
  slugsArray,
}) => {
  const router = useRouter()
  const toggleShoppingCard = useShoppingCard((state) => state.toggleShoppingCard)
  const toggleLogin = useLogin((state) => state.toggleLogin)
  const toggleSignup = useSignup((state) => state.toggleSignup)
  return (
    <>
      <h1>Heading</h1>
      <div className="overflow-x-hidden relative min-h-screen">
        <ProductsGrid products={products} />
        <button onClick={() => toggleShoppingCard()}>Card</button>
        <button onClick={() => toggleLogin()}>Login</button>
        <button onClick={() => toggleSignup()}>Signup</button>
      </div>
      {!!router.query.productSlug && <ProductDetails slugsArray={slugsArray} />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await prisma.product.findMany()
  const slugsArray: string[] = []

  products.forEach((product) => slugsArray.push(product.slug))

  return {
    props: {
      products,
      slugsArray,
    },
    // revalidate: 1,
  }
}

export default Home
