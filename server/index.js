const express = require('express');
const next = require('next');

const port = process.env.NODE_ENV || 3080;

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      return handle(req, res)
    })

    server.get('/about', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  })