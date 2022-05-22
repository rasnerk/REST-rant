const router = require('express').Router();
const placesController = require('../controllers/places')

router.get('/', placesController.fetchAllPlaces )
router.post('/', placesController.createNewPlace )
router.get('/new', (req,res) => res.render('places/new') )
router.get('/:id', placesController.fetchSinglePlace )
router.put('/:id', placesController.updatePlace )
router.delete('/:id', placesController.deletePlace )
router.get('/:id/edit', placesController.editPlace )
router.post('/:id/rant', (req, res) => res.send('GET /places/:id/rant stub') )
router.delete('/:id/rant/:rantId', (req, res) => res.send('GET /places/:id/rant/:rantId stub') )

module.exports = router;