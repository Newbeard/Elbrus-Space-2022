const router = require('express').Router();

// .get(citiesController);
// .get(getCoordinates);

const { citiesController, citiesOfSelectedCountryController } = require('../controllers/citiesController');

router.route('/')
  .get(citiesController)
  .post(citiesOfSelectedCountryController);

module.exports = router;
