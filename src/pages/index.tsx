import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { Product } from '@prisma/client'
import dynamic from 'next/dynamic'

import prisma from '../libs/prisma'
import ProductsGrid from '../components/layouts/Search/ProductsGrid'
import Hero from '../components/elements/Hero'
import { ProductDetails } from '../components/elements/Modals'
import { useLogin, useSignup } from '../libs/stores'

const SearchPage = dynamic(() => import('../components/elements/SearchPage'))

const Home: React.FC<{ products: Product[]; slugsArray: [string] }> = ({
  slugsArray,
}) => {
  const router = useRouter()
  return (
    <>
      {/* <h1>Heading</h1> */}
      <div className="overflow-hidden relative min-h-screen">
        <Hero router={router} />
      </div>
      {!!router.query.productSlug && <ProductDetails slugsArray={slugsArray} />}
      {!!router.query.search && <SearchPage router={router} />}
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const products = await prisma.product.findMany()
//   const slugsArray: string[] = []

//   products.forEach((product) => slugsArray.push(product.slug))

//   return {
//     props: {
//       products,
//       slugsArray,
//     },
//     // revalidate: 1,
//   }
// }

export default Home
