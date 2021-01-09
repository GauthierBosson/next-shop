import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'

import Hero from '../components/layouts/Home/Hero'

const SearchPage = dynamic(() => import('../components/elements/SearchPage'))

const Home: React.FC = () => {
  const router = useRouter()
  return (
    <>
      <div className="overflow-hidden relative min-h-screen">
        <Hero router={router} />
      </div>
      <AnimatePresence>
        {!!router.query.search && <SearchPage router={router} />}
      </AnimatePresence>
    </>
  )
}

export default Home
