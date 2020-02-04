import { Schema, model } from 'mongoose'
import { UsersInterface } from '../interfaces/UsersInterface'

const userSchema = new Schema({
  email: String,
  name: String,
  birthdate: Date,
  favouriteTeam: String
}, {
  timestamps: true
})

export default model<UsersInterface>('user', userSchema)
