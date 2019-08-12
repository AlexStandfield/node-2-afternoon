const express = require('express')
const mc = require('./controllers/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const mBaseUrl = '/api/messages'
app.post(mBaseUrl, mc.create)
app.get(mBaseUrl, mc.read)
app.put(`${mBaseUrl}/:id`, mc.update)
app.delete(`${mBaseUrl}/:id`, mc.delete)

app.listen(3001, () => {
    console.log('Server is Running on 3001 :)')
})