import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import prisma from '../../../../libs/prisma'

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  const { param } = req.query

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: param.toString(),
        mode: 'insensitive',
      },
    },
  })

  res.json(products)
})

export default handler
