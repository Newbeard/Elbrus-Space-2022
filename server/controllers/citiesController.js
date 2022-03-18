const { City } = require('../db/models');

const citiesController = async (req, res) => {
  try {
    const allCities = await City.findAll();
    console.log(allCities);
    res.json(allCities);
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};
module.exports = { citiesController };
