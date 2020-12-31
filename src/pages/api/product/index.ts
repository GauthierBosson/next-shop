import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import prisma from '../../../libs/prisma'

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  const products = await prisma.product.findMany()

  res.json({ products })
})

export default handler
