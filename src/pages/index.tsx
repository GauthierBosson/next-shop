import ProductsGrid from '../components/layouts/Home/ProductsGrid'
import { useShoppingCard, useProductDetails, useLogin } from '../libs/stores'

const Home: React.FC = () => {
  const toggleShoppingCard = useShoppingCard((state) => state.toggleShoppingCard)
  const toggleModal = useLogin((state) => state.toggleModal)
  const toggleProductDetails = useProductDetails(
    (state) => state.toggleProductDetails
  )
  return (
    <>
      <div className="overflow-x-hidden relative min-h-screen">
        <ProductsGrid />
        <button onClick={() => toggleShoppingCard()}>Card</button>
        <button onClick={() => toggleProductDetails()}>Product</button>
        <button onClick={() => toggleModal()}>Modal</button>
      </div>
    </>
  )
}

export default Home
