import { useShoppingCard } from '../../../libs/stores'

const Navbar: React.FC = () => {
  const toggleShoppingCard = useShoppingCard((state) => state.toggleShoppingCard)
  return (
    <nav className="h-28 w-full flex justify-between items-center border-black border-solid border absolute top-0 right-0 z-50 px-32">
      <div>Logo</div>
      <div className="flex">
        <div className="mr-8" onClick={() => toggleShoppingCard()}>
          card
        </div>
        <div>profile</div>
      </div>
    </nav>
  )
}

export default Navbar
