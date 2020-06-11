const express = require('express')
const app = express()
const port = 8000

app.use('/', express.static('files'))

app.get('/', (req, res) =>
  res.end()
)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))