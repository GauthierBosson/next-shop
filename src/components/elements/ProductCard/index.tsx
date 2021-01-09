import Link from 'next/link'
import useRouter from 'next/router'

const ProductCard: React.FC<{ title: string; slug: string }> = ({ title, slug }) => {
  const router = useRouter
  return (
    <div className="border-black border-solid border h-72">
      <Link
        href={`?search=${router.query.search}&productSlug=${slug}`}
        as={`/product/${slug}`}
      >
        <a>{title}</a>
      </Link>
    </div>
  )
}

export default ProductCard
