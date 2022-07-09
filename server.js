const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req,res) => {
  return res.json([
    { nome: 'Henriqui'},
    { nome: 'Felipe'},
    { nome: 'Diego'}
  ])
})

app.listen(4567, () => console.log("Servidor ativado na porta 4567") )