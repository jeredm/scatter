import express from 'express'
import StepModel from '../models/step'

const router = express.Router()

router.post('/', (req, res) => {
  const { stepNm, sequenceN, mvnCmd, path } = req.body
  const step = new StepModel({
    stepNm,
    sequenceN,
    mvnCmd,
    path,
  })
  step.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/:stepId', (req, res) => {
  StepModel.find({ _id: req.params.stepId }, '_id stepNm sequenceN mvnCmd path')
    .then(step => res.json({ step }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/', (req, res) => {
  StepModel.find({})
      .then(steps => res.json(steps))
      .catch(err => res.status(500).json({ error: err }))
})

export default router
