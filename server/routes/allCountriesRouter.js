const router = require('express').Router();
const { countriesController } = require('../controllers/countriesController');

router.route('/')
  .get(countriesController);

module.exports = router;
