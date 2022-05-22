// -- Requried Modules -- //
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express();

// -- Middleware -- //
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// -- Routes -- //
app.use('/places', require('./routes/places') )
app.get('/', (req,res) => res.render('home') )
app.get('*', (req,res) => res.render('error404') )

// -- Database Connection & App Start -- //
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen(process.env.PORT, () => console.log(`Database Connected : Server running`)) )
    .catch( (err) => console.log(err.message) )