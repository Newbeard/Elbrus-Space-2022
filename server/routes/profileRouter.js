const router = require('express').Router();
const { initProfile, editProfile } = require('../controllers/profileController');

router.route('/')
  .get(initProfile)
  .put(editProfile);

module.exports = router;
