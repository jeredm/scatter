import mongoose from 'mongoose'

const stepSchema = new mongoose.Schema({
  stepNm: {
    type: String,
    required: true,
  },
  sequenceN: {
    type: Number,
    required: true,
  },
  mvnCmd: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Step', stepSchema)
