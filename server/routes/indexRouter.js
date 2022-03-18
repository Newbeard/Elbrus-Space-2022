const router = require('express').Router();
const registrationRouter = require('./registrationRouter');
const loginRouter = require('./loginRouter');
const logoutRouter = require('./logoutRouter');
const sessionRouter = require('./sessionRouter');
<<<<<<< HEAD
const searchRouter = require('./searchRouter');
=======

const allCityRouter = require('./allCityRouter');

>>>>>>> ca0061cc0cb98e07eb33b84301f975ffd5336a9f

router.use('/registration', registrationRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/session', sessionRouter);
<<<<<<< HEAD
router.use('/search', searchRouter);
=======
router.use('/city', allCityRouter);
>>>>>>> ca0061cc0cb98e07eb33b84301f975ffd5336a9f

module.exports = router;
