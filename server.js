const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const app = express();
const {
  getAllCartoons,
  newCharacter,
  getCharById,
  deleteCharById,
  editCharById
} = require('./dal')


app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'));


//-------------home page------------------
app.get('/', (req, res) => {
  getAllCartoons().then(function(cartoon) {
    res.render('./allCharacters', {
      cartoon
    });
  })
})

app.post('/', (req, res) => {
  res.redirect('./new');
})

//-----------new character form-----------
app.get('/new', (req, res) => {
  getAllCartoons().then(function(cartoon) {
    res.render("./form")
  })
})

app.post('/new', (req, res) => {
  newCharacter(req.body).then(function() {
    res.send('success!');
  })
})

// ---------character profile--------------
app.get('/character/:id', (req, res) => {
  getCharById(req.params.id).then(function(cartoon) {
    res.render("./profile", {
      cartoon
    })
  })
})

// ------------Edit------------------------
// app.get('/character/edit/:id', (req, res) => {
//   res.render('./edit')
// })

// app.get('/character/edit/:id', (req, res) => {
//   getCharById(req.params.id).then(function(cartoon) {
//     res.render('./edit', {
//       cartoon
//     });
//   })
// })

app.post('/character/edit/:id', (req, res) => {
  getCharById(req.params.id).then(function(cartoon) {
    res.render('./edit', {
      cartoon
    })
  })
})
// ------------Delete-----------------------
app.post('/delete/:id', (req, res) => {
  deleteCharById(req.params.id);
  res.redirect('/')
})


app.listen(3000, function() {
  console.log('server started on port: 3000')
})
