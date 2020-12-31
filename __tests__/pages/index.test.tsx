import { render, screen } from '@testing-library/react'
import Home from '../../src/pages'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('Home', () => {
  it('renders without crashing', () => {
    render(
      <Home
        products={[
          {
            id: 1,
            name: 'Persona 5',
            description: 'blabla',
            price: '50€',
            slug: 'persona-5',
          },
        ]}
        slugsArray={['persona-5']}
      />
    )
    expect(screen.getByRole('heading', { name: 'Heading' })).toBeInTheDocument()
  })
})
