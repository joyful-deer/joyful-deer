const serverless = require('serverless-http')
const express = require('express')

const app = express()

const MOODS = require('./moods')
const COLORS = require('./colors')
const ANIMALS = require('./animals')
const FRUITS = require('./fruits')


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/get-name', function (req, res) {
  const prefixes = [MOODS, COLORS]
  const postfixes = [ANIMALS, FRUITS]

  const prefixList = prefixes[getRandomInt(2)]
  const postfixList = postfixes[getRandomInt(2)]

  const prefix = prefixList[getRandomInt(prefixList.length)]
  const postfix = postfixList[getRandomInt(postfixList.length)]
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.send(`${prefix}-${postfix}`)
})

module.exports.handler = serverless(app)