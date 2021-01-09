import React from 'react'
import { withNextRouter } from 'storybook-addon-next-router'

import ProductCard from '../../../components/elements/ProductCard'

export default {
  title: 'Components/elements/ProductCard',
  component: ProductCard,
  decorators: [withNextRouter],
}

const Template = (args: { title: string; slug: string }) => <ProductCard {...args} />

export const Base = Template.bind({})
Base.args = { title: 'Persona 5', slug: 'persona-5' }
Base.decorators = [
  (Story) => (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/5">
        <Story />
      </div>
    </div>
  ),
]
