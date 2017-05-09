import express from 'express'
import ServerModel from '../models/server'

const router = express.Router()

router.post('/', (req, res) => {
  const { serverNm, url, credential } = req.body
  const server = new ServerModel({
    serverNm,
    url,
    credential,
  })
  server.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/:serverId', (req, res) => {
  ServerModel.find({ _id: req.params.serverId }, '_id, serverNm url credential')
    .then(server => res.json({ server }))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/', (req, res) => {
  ServerModel.find({}, '_id, serverNm url credential')
      .then(servers => res.json(servers))
      .catch(err => res.status(500).json({ error: err }))
})

export default router
