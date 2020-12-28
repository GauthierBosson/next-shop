import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import prisma from '../../libs/prisma'

const handler = nc<NextApiRequest, NextApiResponse>()
  .get('/user/:id', (req, res) => {
    res.send('/user/:id')
  })
  .post((req, res) => {
    res.send('post user')
  })
  .put((req, res) => {
    res.send('put user')
  })

export default handler
