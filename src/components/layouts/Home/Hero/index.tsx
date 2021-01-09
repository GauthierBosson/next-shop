import { NextRouter } from 'next/router'
import { H1 } from '../../../primitives/Headings'

import { HeroSearch } from '../../../elements/Forms'

const Hero: React.FC<{ router: NextRouter }> = ({ router }) => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <H1 className="mb-8">Video game shop</H1>
      <HeroSearch router={router} />
    </section>
  )
}

export default Hero
