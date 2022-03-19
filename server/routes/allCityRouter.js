const router = require('express').Router();
const { citiesController } = require('../controllers/citiesController');

router.route('/')
  .get(citiesController);

module.exports = router;
