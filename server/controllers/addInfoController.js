const { User } = require('../db/models');

const addInfoController = async (req, res) => {
  try {
    const info = req.body;
    console.log(info);
    const students = await User.update();
    res.json(students);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { addInfoController };
