const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const { isValidEmail, isValidPassword, isValidName } = require('../helpers/validator');

const registerUserPost = async (req, res) => {
  try {
    const {
      email, password, confirmPassword,
    } = req.body;
    const isUserExist = await User.findOne({
      where: { email },
    });
    if (isUserExist) {
      return res.json({ success: false, errors: `Пользователь с ${email} уже зарегистрирован!` });
    }
    if (!isValidEmail(email)) {
      return res.json({ success: false, errors: 'Email введен не коректно' });
    }
    if (!isValidPassword(password)) {
      return res.json({ success: false, errors: 'Пароль должен состоять из заглавных и строчных символолв и цифр длиной не менее 6 символов' });
    }
    if (password !== confirmPassword) {
      return res.json({ success: false, errors: 'Пaроли не совпадают' });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashPassword });
    req.session.user = user;
    req.session.isSession = true;
    res.json({ success: true, id: user.id });
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

module.exports = { registerUserPost };
