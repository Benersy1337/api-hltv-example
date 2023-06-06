
const HLTV = require('hltv-api').default
const express = require('express')
const app = express()

app.get('/', async (req, res) => {
  const news = await HLTV.getTopTeams()
  res.json(news)
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})