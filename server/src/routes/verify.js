import express from 'express'
import { exec } from 'child_process'

const router = express.Router()

router.get('/', (req, res) => {
  const mvn = exec('mvn --version')
  mvn.stdout.on('data', (data) => {
    res.json({ data })
  })
})

export default router
