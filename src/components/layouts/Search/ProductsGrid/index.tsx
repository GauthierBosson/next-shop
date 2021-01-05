import { Product } from '@prisma/client'
import ProductCard from '../../../elements/ProductCard'

const ProductsGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-12 px-12 my-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} title={product.name} slug={product.slug} />
      ))}
    </div>
  )
}

export default ProductsGrid
