import { Document } from 'mongoose'
export interface UsersInterface extends Document {
  email: string;
  name: string;
  birthdate: Date;
  favouriteTeam: string;
}
