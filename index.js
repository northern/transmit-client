
import express from 'express'
import morgan from 'morgan'
import HttpStatus from 'http-status-codes'

const server = express()

if (process.env.NODE_ENV !== 'production') {
  server.use(morgan('combined'))
}

server.use(express.static('public'))

server.use((err, req, res, next) => {
  console.error(err)

  res.sendStatus(500)
})

server.listen(process.env.SERVER_PORT, () => console.info(`Transmit Server running on port ${process.env.SERVER_PORT}`))
