const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const { isValidEmail, isValidPassword } = require('../helpers/validator');

const registerUserPost = async (req, res) => {
  try {
    const {
      email, password, confirmPassword,
    } = req.body;
    const isUserExist = await User.findOne({
      where: { email },
    });
    if (isUserExist) {
      return res.json({ error: `Пользователь с ${email} уже зарегистрирован!` });
    }
    if (!isValidEmail(email)) {
      return res.json({ error: 'Email введен некоректно' });
    }
    if (!isValidPassword(password)) {
      return res.json({ error: 'Пароль должен быть не менее 6 символов. Иметь строчную и заглавную буквы, цифру' });
    }
    if (password !== confirmPassword) {
      return res.json({ error: 'Пaроли не совпадают' });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email, password: hashPassword, isAdmin: false, isApproved: true, emailIsApproved: true,
    });
    req.session.user = user;
    req.session.isSession = true;
    res.json({ id: user.id });
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

module.exports = { registerUserPost };
