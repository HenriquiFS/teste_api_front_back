const express = require('express')
const app = express()

app.get('/', (req,res) => {
  return res.json({ message: 'ok'})
})

app.listen(4567, () => console.log("Servidor ativado na porta 4567") )