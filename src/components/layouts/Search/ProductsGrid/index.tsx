import { Product } from '@prisma/client'
import ProductCard from '../../../elements/ProductCard'

const ProductsGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-12 px-32 my-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} title={product.name} slug={product.slug} />
        ))
      ) : (
        <p>Aucun résultats pour cette recherche</p>
      )}
    </div>
  )
}

export default ProductsGrid
