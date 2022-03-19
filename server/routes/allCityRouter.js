const router = require('express').Router();
const { citiesController, citiesOfSelectedCountryController } = require('../controllers/citiesController');

router.route('/')
  .get(citiesController)
  .post(citiesOfSelectedCountryController);

module.exports = router;
