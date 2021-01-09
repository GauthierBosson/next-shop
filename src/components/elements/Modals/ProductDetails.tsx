import { Product } from '@prisma/client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { Portal } from '../../../libs/hooks'

const ProductDetails: React.FC<{ products: Product[] }> = ({ products }) => {
  const router = useRouter()
  const isOpen = !!router.query.productSlug

  const slugsArray = products.map((product) => product.slug)
  const productIndex = slugsArray.indexOf(router.query.productSlug.toString())
  const nextProduct = slugsArray.find((_, index) => index === productIndex + 1)
  const previousProduct = slugsArray.find((_, index) => index === productIndex - 1)

  const { isLoading, error, data } = useQuery(
    ['getProduct', router.query.productSlug],
    () =>
      axios.get(`/api/product/${router.query.productSlug}`).then((res) => res.data)
  )

  return (
    isOpen && (
      <Portal selector="#modal-root">
        <div
          onClick={() => router.push(`?search=${router.query.search}`)}
          className="fixed w-full min-h-screen bg-black bg-opacity-30 flex justify-center items-center top-0 right-0 z-20"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-20 w-1/2"
          >
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                {error ? (
                  <p>error</p>
                ) : (
                  <div>
                    <p>{data.name}</p>
                  </div>
                )}
              </>
            )}
            <Link
              href={`?search=${router.query.search}&productSlug=${previousProduct}`}
              as={`/product/${previousProduct}`}
            >
              <a>Précédent</a>
            </Link>
            <Link
              href={`?search=${router.query.search}&productSlug=${nextProduct}`}
              as={`/product/${nextProduct}`}
            >
              <a>Suivant</a>
            </Link>
          </div>
        </div>
      </Portal>
    )
  )
}

export default ProductDetails
