import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import prisma from '../../../libs/prisma'

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  const { slug } = req.query

  const product = await prisma.product.findFirst({
    where: {
      slug: slug.toString(),
    },
  })

  res.json(product)
})

export default handler
