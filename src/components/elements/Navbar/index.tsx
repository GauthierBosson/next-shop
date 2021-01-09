import Link from 'next/link'
import { useShoppingCard, useLogin, useSignup } from '../../../libs/stores'

const Navbar: React.FC = () => {
  const toggleShoppingCard = useShoppingCard((state) => state.toggleShoppingCard)
  const toggleLogin = useLogin((state) => state.toggleLogin)
  const toggleSignup = useSignup((state) => state.toggleSignup)
  return (
    <nav className="h-28 w-full flex justify-between items-center border-black border-solid border absolute top-0 right-0 z-50 px-32">
      <div>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <div className="flex">
        <div className="mr-8" onClick={() => toggleShoppingCard()}>
          card
        </div>
        <div className="mr-8">profile</div>
        <div onClick={() => toggleSignup()} className="mr-8">
          signup
        </div>
        <div onClick={() => toggleLogin()}>login</div>
      </div>
    </nav>
  )
}

export default Navbar
