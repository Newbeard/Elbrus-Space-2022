const router = require('express').Router();
const { registerUserPost } = require('../controllers/registrationController');

router.route('/')
  .post(registerUserPost);

module.exports = router;
