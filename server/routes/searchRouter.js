const router = require('express').Router();
const { searchController, filterController } = require('../controllers/searchController');

router.route('/')
  .get(searchController)
  .post(filterController);

module.exports = router;
