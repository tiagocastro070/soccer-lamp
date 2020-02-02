import { Request, Response } from 'express'
import User from '../Schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.send({ users })
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)
    return res.send({ user })
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const { userId } = req.params
    const user = await User.findOne({ _id: userId })
    return res.send({ user })
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { userId } = req.params
    const user = await User.findOneAndUpdate({ _id: userId }, req.body, { new: true })
    return res.send({ user })
  }
}

export default new UserController()
