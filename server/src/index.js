import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import verify from './routes/verify'
import steps from './routes/steps'
import servers from './routes/servers'
import config from './config'

const app = express()

mongoose.connect(config.database)
mongoose.connection.on('error', () => {
  // eslint-disable-next-line no-console
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?')
})

app.use(bodyParser.json())

app.use('/api/verify', verify)
app.use('/api/steps', steps)
app.use('/api/servers', servers)

// eslint-disable-next-line no-console
app.listen(8080, () => console.info('Running server on 8080'))
