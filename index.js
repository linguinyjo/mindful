const passport = require('passport')
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

require('./models/users')
require('./services/passport')

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})

const app = express()

app.use(bodyParser.json())

app.use(cookieSession({ 
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey] 
}))


app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/sessionRoutes')(app)

if(process.env.NODE_ENV === 'production'){
  //makes sure that express will serve up the production assets like main.js in prod mode (dev mode create react app takes care of this)  
  //if an unknown request comes in with no recognised route, look in client/build and if it exists, then serve up that file
  app.use(express.static('client/build'))
  //if it cant find the file then serve up the index.html file as a catch all (this covers the router links on the client side)
    const path = require('path')
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    })
  }
  
const PORT = process.env.PORT || 5000 //heroku injects a port for us to use, otherwise use 5000
app.listen(PORT)


