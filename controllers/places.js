const Place = require('../models/schemas/places')

const fetchAllPlaces = (req,res) => {
  Place.find({}, (err,docs) => {
    if (err || docs === null) return res.render('error404')
    res.render('places/index', { places: docs })
  })
}

const createNewPlace = (req,res) => {
  Place.create(req.body, (err,doc) => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (let field in err.errors) {
        message += `${field} was ${err.errors[field].value}.`
        message += `${err.errors[field].message}`
      }
      res.render('places/new', { message } )
    } 
    if (err || doc === null) return res.render('error404')
    res.redirect('/places')
  })
}

const fetchSinglePlace = (req,res) => {
  Place.findById(req.params.id, (err,doc) => {
    if (err || doc === null) return res.render('error404')
    res.render('places/show', { place: doc } )
  })
}

const updatePlace = (req,res) => {
  Place.findByIdAndUpdate(req.params.id, req.body, (err,doc) => {
    if (err || doc === null) return res.render('error404')
    res.redirect(`/places/${doc._id.toHexString()}`)
  })
}

const deletePlace = (req,res) => {
  Place.findByIdAndDelete(req.params.id, (err,doc) => {
    if (err || doc === null) return res.render('error404')
    res.redirect('/places')
  })
}

const editPlace = (req,res) => {
  Place.findById(req.params.id, (err,doc) => {
    if (err || doc === null) return res.render('error404')
    res.render('places/edit', { place: doc } )
  })
}

module.exports = { fetchAllPlaces, createNewPlace, fetchSinglePlace, updatePlace, deletePlace, editPlace }