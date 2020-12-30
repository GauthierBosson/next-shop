import { Product as ProductType } from '@prisma/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import prisma from '../../libs/prisma'

const Product: React.FC<{ product: ProductType }> = ({ product }) => {
  return <h1>Product page: {product.name}</h1>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await prisma.product.findFirst({
    where: {
      slug: params.productSlug.toString(),
    },
  })

  return {
    props: {
      product,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await prisma.product.findMany()

  return {
    paths:
      products.map((product) => ({
        params: { productSlug: product.slug },
      })) || [],
    fallback: true,
  }
}

export default Product
