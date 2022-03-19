const { User, Campus, Country, City } = require('../db/models');

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
    const arrayInclude = [];

    if (params.campusName) {
      arrayInclude.push({
        model: Campus,
        where: { campusName: params.campusName },
      });
    }
    if (params.countryName) {
      arrayInclude.push({
        model: Country,
        where: { countryName: params.countryName },
      });
    }
    if (params.cityName) {
      arrayInclude.push({
        model: City,
        where: { cityName: params.cityName },
      });
    }

    const students = await User.findAll({
      include: arrayInclude,
      raw: true,
    });

    res.json(students);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { searchController, filterController };
