const { User, Campus } = require('../db/models');

const searchController = async (req, res) => {
  try {
    const students = await User.findAll();
    res.json(students);
  } catch (error) {
    res.sendStatus(500);
  }
};

const filterController = async (req, res) => {
  try {
    const params = req.body;
    const campusId = await Campus.findAll({ where: params });
    const students = await User.findAll({ where: { campusId: campusId[0].id } });

    res.json(students);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { searchController, filterController };
