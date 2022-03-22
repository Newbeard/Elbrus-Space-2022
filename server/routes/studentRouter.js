const router = require('express').Router();
const { initStudent } = require('../controllers/initStudentController');

router.route('/')
  .post(initStudent);

module.exports = router;
