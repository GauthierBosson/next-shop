import { motion } from 'framer-motion'
import { NextRouter } from 'next/router'

import ProductsGrid from '../../layouts/Search/ProductsGrid'
import { useSearchProducts } from '../../../libs/hooks/product'

const variants = {
  hidden: { bottom: '-100%' },
  visible: { bottom: '0%' },
}

const SearchPage: React.FC<{ router: NextRouter }> = ({ router }) => {
  const queryParam = router.query.search.toString()
  const { isLoading, isError, data, error } = useSearchProducts(queryParam)
  return (
    <motion.div
      className="h-screen w-full bg-white absolute right-0 z-10 pt-28"
      variants={variants}
      initial="hidden"
      animate={router.query.search ? 'visible' : 'hidden'}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <h1 className="text-black">Search page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>{isError ? <p>{error.message}</p> : <ProductsGrid products={data} />}</>
      )}
    </motion.div>
  )
}

export default SearchPage
