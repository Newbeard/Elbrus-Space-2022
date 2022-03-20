const router = require('express').Router();
const registrationRouter = require('./registrationRouter');
const loginRouter = require('./loginRouter');
const logoutRouter = require('./logoutRouter');
const sessionRouter = require('./sessionRouter');
const searchRouter = require('./searchRouter');
const allCityRouter = require('./allCityRouter');
const allCountriesRouter = require('./allCountriesRouter');

router.use('/registration', registrationRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/session', sessionRouter);
router.use('/search', searchRouter);
router.use('/cities', allCityRouter);
router.use('/countries', allCountriesRouter);

module.exports = router;
