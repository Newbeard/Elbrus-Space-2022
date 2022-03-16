const router = require('express').Router();
const { loginEntry } = require('../controllers/loginController');

router.route('/')
  .post(loginEntry);

module.exports = router;
