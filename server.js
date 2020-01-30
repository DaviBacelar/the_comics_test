require('dotenv').config();
const express = require('express')
var app = express();
const port = 3001;
// const dev = process.env.NODE_ENV !== 'production'
// const handle = app.getRequestHandler()
// const bodyParser = require('body-parser')
// const parseurl = require('parseurl')

//bcrypt
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;

//mongo
const db = require("./db/db")
const mongoose = require('mongoose');
const models = require("./db/models")
mongoose.connect(process.env.MONGO_STRING, {useNewUrlParser: true});
var connection = mongoose.connection;

app.get('/', (req, res) => {
  res.send('On!');
});

app.post('/api/login', (req, res) => {
    db.findOne("user", { username:  req.body.username })
    .then(result => {
        bcrypt.compare(password, result.password, (err, isValid) => {
            if (err) {
              console.log(err)
              return reject({message: "Nome de Usuário ou Senha Incorretos."})
            }
    
            else if (!isValid) {
              return reject({message: "Nome de Usuário ou Senha Incorretos."})
            }
    
            else {
              return resolve(result)
            }
        })
    })
    .catch(err => {
        res.send({message: "Nome de Usuário ou Senha Incorretos."})
    })    
});

app.post('/api/register', (req, res) => {
  db.create('user', req.body)
  .then(result => {
    res.status(200)
    res.send(result)
  }) 
  .catch(err => {
    res.status(500)
    res.send(err)
  })   
})

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
});