const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Amazon 2.0 - KINDLER ')
})

app.listen(3000, ()=>{ 
  console.log('SERVIDOR RODANDO EM - http://localhost:3000'); 
});
