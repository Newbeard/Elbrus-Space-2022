const router = require('express').Router();
const { sessionController } = require('../controllers/sessionController');

router.route('/')
  .get(sessionController);

module.exports = router;
