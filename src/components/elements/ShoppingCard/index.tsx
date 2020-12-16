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
      className="w-1/4 min-h-screen bg-black absolute top-0 right-0"
    />
  )
}

export default ShoppingCard
