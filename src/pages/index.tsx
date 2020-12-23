import ProductsGrid from '../components/layouts/Home/ProductsGrid'
import Modal from '../components/elements/Modal'
import { useShoppingCard, useProductDetails, useModal } from '../libs/stores'

const Home: React.FC = () => {
  const toggleShoppingCard = useShoppingCard((state) => state.toggleShoppingCard)
  const toggleModal = useModal((state) => state.toggleModal)
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
      <Modal title="testtitle">test test test</Modal>
    </>
  )
}

export default Home
