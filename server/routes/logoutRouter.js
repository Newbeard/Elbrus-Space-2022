const router = require('express').Router();
const { logoutController } = require('../controllers/logoutController');

router.route('/')
  .get(logoutController);

module.exports = router;
