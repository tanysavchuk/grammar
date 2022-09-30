import express, {json} from 'express'
import path from 'path'
import http from 'http'
import {fileURLToPath} from 'url'

const __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)
const app = express()
app.use('/static', express.static(path.join(__dirname, '../dist')))
app.use('/public', express.static(path.join(__dirname, '../public')))
app.use(json())
const server = http.createServer(app)
app.get('/', (req, res) => {
  res.sendFile('/pages/home/index.html', {root: __dirname})
})
app.get('/adjectives', (req, res) => {
  res.sendFile('/pages/adjectives/index.html', {root: __dirname})
})
server.listen(3000, () => {
  console.log('listening on  port 3000')
})
