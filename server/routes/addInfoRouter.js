const router = require('express').Router();
const { addInfoController } = require('../controllers/addInfoController');

router.route('/')
  .post(addInfoController);

module.exports = router;
