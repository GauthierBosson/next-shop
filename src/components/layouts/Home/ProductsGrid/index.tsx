import ProductCard from '../../../elements/ProductCard'

const ProductsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-12 px-12 my-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductsGrid