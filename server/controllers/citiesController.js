const { City, Country } = require('../db/models');

const citiesController = async (req, res) => {
  try {
    const allCities = await City.findAll({ raw: true });
    res.json(allCities);
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};
const citiesOfSelectedCountryController = async (req, res) => {
  try {
    const params = req.body;
    const allCities = await City.findAll({
      include: {
        model: Country,
        where: { countryName: params.countryName },
      },
      raw: true,
    });
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

module.exports = { citiesController, citiesOfSelectedCountryController };
