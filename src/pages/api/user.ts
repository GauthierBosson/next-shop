import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import prisma from '../../libs/prisma'

const handler = nc<NextApiRequest, NextApiResponse>()
  .get('/user/:id', (req, res) => {
    res.send('/user/:id')
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })
    res.json(newUser)
  })
  .put((req, res) => {
    res.send('put user')
  })

export default handler
