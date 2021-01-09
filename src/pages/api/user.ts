import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import prisma from '../../libs/prisma'
import { hashPassword } from '../../libs/helpers/passwordHelpers'

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((req, res) => {
    res.send('/user/:id')
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body
    const hashedPassword = await hashPassword(password)
    console.log(hashedPassword)
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
    res.json(newUser)
  })
  .put((req, res) => {
    res.send('put user')
  })

export default handler
