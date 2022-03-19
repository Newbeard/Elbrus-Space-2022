const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const loginEntry = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
    });
    if (user === null) {
      return res.json({ error: `Пользователь с ${email} не зарегистрирован!` });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ error: 'Пароль не верный' });
    }
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

module.exports = { loginEntry };
