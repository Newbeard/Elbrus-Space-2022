const router = require('express').Router();
const registrationRouter = require('./registrationRouter');
const loginRouter = require('./loginRouter');
const logoutRouter = require('./logoutRouter');
const sessionRouter = require('./sessionRouter');

const allCityRouter = require('./allCityRouter');


router.use('/registration', registrationRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/session', sessionRouter);
router.use('/city', allCityRouter);

module.exports = router;
