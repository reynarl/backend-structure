import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  birthday: Date,
  address: String,
  role: String,
  phone: String,
  contacts: [String],
  email: String,
  password: String
})

export default mongoose.model('User', userSchema)