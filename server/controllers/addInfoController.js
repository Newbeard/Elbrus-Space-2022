const { User, Country, City, Campus } = require('../db/models');

const addInfoController = async (req, res) => {
  const { dataForm, id } = req.body;
  const { name, surName, countryName, cityName, campusName } = dataForm;

  if (campusName) {
    try {
      const country = await Country.findOne({ where: { countryName } });
      const city = await City.findOne({ where: { cityName } });
      const campus = await Campus.findOne({ where: { campusName } });
      if (!country) {
        const newCountry = await Country.create({ countryName });
        const newCity = await City.create({ cityName, countrysId: newCountry.id });
        await User.update(
          {
            name,
            surName,
            countryId: newCountry.id,
            cityId: newCity.id,
            campusId: campus.id,
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
            campusId: campus.id,
          },
          { where: { id } },
        );
      } else {
        await User.update(
          {
            name,
            surName,
            countryId: country.id,
            cityId: city.id,
            campusId: campus.id,
          },
          { where: { id } },
        );
      }
    } catch (error) {
      res.sendStatus(500);
    }
  } else {
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
      } else {
        await User.update(
          {
            name,
            surName,
            countryId: country.id,
            cityId: city.id,
          },
          { where: { id } },
        );
      }
    } catch (error) {
      res.sendStatus(500);
    }
  }
};

module.exports = { addInfoController };
