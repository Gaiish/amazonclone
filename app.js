const express = require('express');
var morgan = require('morgan')
var bodyParser = require('body-parser')
var admin = require('firebase-admin')

//express flash => flash error || success messages depending on logic of our route
var session = require('express-session')
var cookieParser = require('cookie-parser')//store a session id
var flash = require('express-flash')

const app = express();
const port = process.env.PORT || 5000;

var serviceAccount =
  require('./fb/clone-7e49b-firebase-adminsdk-oqwb6-8ec582ccdb.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://clone-7e49b.firebaseio.com"
});

var db = admin.firestore()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
  resave: true,
  saveUnitialized: true, //
  secret: 'dope@hope#'
}))

app.use(flash())

app.get('/api', (req, res) => {
  res.json('My name is Gadi');
});

app.post('/create-user', (req, res)=>{
  console.log(req.body)
  console.log(req.body.name)
  console.log(req.body.password)
  console.log(req.body.email)

  //check if a user exists
  var usersRef = db.collection('users')
  usersRef.get()
    .then((snap)=>{
      //console.log('snap:',snap)
      snap.forEach(doc => {
        console.log(doc.id, '=>', doc.data())
      })
      res.end()

    }, (err)=>{
      console.log('err',err)
      res.end()

    })

})

app.listen(port, () => console.log(`Listening on port ${port}`));
