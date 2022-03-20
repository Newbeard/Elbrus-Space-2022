const { User } = require('../db/models');
const findOneEssence = require('../services/findOne.essence');

const initProfile = async (req, res) => {
  try {
    const { id } = req.session.user;
    const user = await findOneEssence(User, id);
    console.log(user);
    res.json({ user });
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

const editProfile = async (req, res) => {
  const { id } = req.session.user;
  const { user } = req.body;
  try {
    const result = await User.update({ user }, { where: { id } });
    console.log(result);
    const userUpdate = await findOneEssence(User, id);
    res.json({ userUpdate });
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

module.exports = { initProfile, editProfile };
