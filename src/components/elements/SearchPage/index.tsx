import { motion } from 'framer-motion'
import { NextRouter } from 'next/router'

const variants = {
  hidden: { bottom: '-100%' },
  visible: { bottom: '0%' },
}

const SearchPage: React.FC<{ router: NextRouter }> = ({ router }) => {
  return (
    <motion.div
      className="h-screen w-full bg-white absolute right-0 z-10 pt-28"
      variants={variants}
      initial="hidden"
      animate={router.query.search ? 'visible' : 'hidden'}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <h1 className="text-black">Search page</h1>
    </motion.div>
  )
}

export default SearchPage
