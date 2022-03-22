const router = require('express').Router();
const getCoordinate = require('../controllers/getCoordinate');

router.route('/')
  .get(getCoordinate)
  .post(getCoordinate);

module.exports = router;
