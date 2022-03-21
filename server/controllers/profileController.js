const { User, City, Country, Campus } = require('../db/models');
const findOneEssence = require('../services/findOne.essence');

const initProfile = async (req, res) => {
  try {
    const { id } = req.session.user;
    const user = await User.findOne({
      where: {
        id,
      },
      raw: true,
      include: [{
        model: City,
        attributes: ['cityName'],
      },
      {
        model: Country,
        attributes: ['countryName'],
      },
      {
        model: Campus,
        attributes: ['campusName'],
      },
      {
        model: City,
        as: 'currentCit',
        attributes: ['cityName'],
      },
      {
        model: Country,
        as: 'currentCou',
        attributes: ['countryName'],
      }],

    });
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
