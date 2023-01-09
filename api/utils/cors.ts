import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

const cors = Cors({
  methods: ['PUT'],origin:"https://markvergara.vercel.app/"
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}