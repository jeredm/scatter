import mongoose from 'mongoose'

const serverSchema = new mongoose.Schema({
  serverNm: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  credential: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Server', serverSchema)
