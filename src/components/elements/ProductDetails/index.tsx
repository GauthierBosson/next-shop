import { motion } from 'framer-motion'

import { useProductDetails } from '../../../libs/stores'

const variants = {
  hidden: { left: '0%', display: 'none' },
  visible: { left: '50%', display: 'block' },
}

const ProductDetails: React.FC = () => {
  const isOpen = useProductDetails((state) => state.isOpen)
  return (
    <div className="h-screen w-full bg-black opacity-40 overflow-hidden fixed z-10">
      <motion.div
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={variants}
        className="w-3/4 bg-black h-96 absolute top-1/2 transform -translate-x-2/4 -translate-y-2/4"
      />
    </div>
  )
}

export default ProductDetails
