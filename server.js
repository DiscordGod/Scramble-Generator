const express = require('express')
const app = express()
var Scrambo = require('scrambo');
var threebythree = new Scrambo();

app.get('/', function (req, res) {
    res.send(threebythree.get(1) + "\n")
})

app.listen(3000, function () {
  console.log("Up and ready cappin'")
})