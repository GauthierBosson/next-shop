import { Portal } from '../../../libs/hooks'
import { useProductDetails } from '../../../libs/stores'

const ProductDetails: React.FC = () => {
  const isOpen = useProductDetails((state) => state.isOpen)
  const toggleProductDetails = useProductDetails(
    (state) => state.toggleProductDetails
  )

  return (
    isOpen && (
      <Portal selector="#modal-root">
        <div
          onClick={() => toggleProductDetails()}
          className="fixed w-full min-h-screen bg-black bg-opacity-30 flex justify-center items-center top-0 right-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-20 w-1/2"
          >
            <p>Product details</p>
          </div>
        </div>
      </Portal>
    )
  )
}

export default ProductDetails
