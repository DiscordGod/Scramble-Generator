const express = require('express')
const app = express()
var Scrambo = require('scrambo');
var threebythree = new Scrambo();

app.get('/', function (req, res) {
  res.send(threebythree.get(30))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})