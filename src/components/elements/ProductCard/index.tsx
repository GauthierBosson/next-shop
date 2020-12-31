import Link from 'next/link'

const ProductCard: React.FC<{ title: string; slug: string }> = ({ title, slug }) => {
  return (
    <div className="border-black border-solid border h-72">
      <Link href={`/?productSlug=${slug}`} as={`/product/${slug}`}>
        <a>{title}</a>
      </Link>
    </div>
  )
}

export default ProductCard
