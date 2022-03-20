const { User, Country, City } = require('../db/models');

const addInfoController = async (req, res) => {
  const { dataForm, id } = req.body;
  const { name, surName, countryName, cityName } = dataForm;
  try {
    const country = await Country.findOne({ where: { countryName } });
    const city = await City.findOne({ where: { cityName } });
    if (!country) {
      const newCountry = await Country.create({ countryName });
      const newCity = await City.create({ cityName, countrysId: newCountry.id });
      await User.update(
        {
          name,
          surName,
          countryId: newCountry.id,
          cityId: newCity.id,
        },
        { where: { id } },
      );
    } else if (!city) {
      const newCity = await City.create({ cityName, countrysId: country.id });
      await User.update(
        {
          name,
          surName,
          countryId: country.id,
          cityId: newCity.id,
        },
        { where: { id } },
      );
    }
    // await User.update(dataForm, { where: { id } });
    // res.json(students);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { addInfoController };
