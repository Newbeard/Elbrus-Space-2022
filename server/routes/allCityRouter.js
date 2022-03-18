const router = require('express').Router();
const { citiesController } = require('../controllers/citiesController');

router.route('/city')
  .get(citiesController);

module.exports = router;
