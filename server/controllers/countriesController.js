const { Country } = require('../db/models');

const countriesController = async (req, res) => {
  try {
    const allCountries = await Country.findAll({ raw: true });
    res.json(allCountries);
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};
module.exports = { countriesController };
