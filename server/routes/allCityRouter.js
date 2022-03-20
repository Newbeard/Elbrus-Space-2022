const router = require('express').Router();
const { citiesController, getCoordinates } = require('../controllers/citiesController');

router.route('/')
  // .get(citiesController);
  .get(getCoordinates);

module.exports = router;
