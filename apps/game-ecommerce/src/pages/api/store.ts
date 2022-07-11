import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  const query = req.query

  return res.status(400).json({ message: "Invalid Request" })
}