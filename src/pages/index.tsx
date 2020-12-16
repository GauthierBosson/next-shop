import ShoppingCard from '../components/elements/ShoppingCard'
import ProductsGrid from '../components/layouts/Home/ProductsGrid'

import { useShoppingCard } from '../libs/stores'

const Home: React.FC = () => {
  const toggleShoppingCard = useShoppingCard((state) => state.toggleShoppingCard)
  return (
    <div className="overflow-x-hidden relative">
      <ShoppingCard />
      <ProductsGrid />
      <button onClick={() => toggleShoppingCard()}>Card</button>
    </div>
  )
}

export default Home
