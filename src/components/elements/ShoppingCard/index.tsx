import { motion } from 'framer-motion'

import { useShoppingCard } from '../../../libs/stores'

const variants = {
  hidden: { transform: 'translateX(100%)' },
  visible: { transform: 'translateX(0%)' },
}

const ShoppingCard: React.FC = () => {
  const isOpen = useShoppingCard((state) => state.isOpen)
  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ type: 'spring', duration: 1 }}
      className="w-full min-h-screen bg-black fixed top-0 right-0 z-50 lg:w-1/2 xl:w-1/4"
    />
  )
}

export default ShoppingCard
