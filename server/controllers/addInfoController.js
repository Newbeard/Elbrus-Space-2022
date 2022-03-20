const { User, Country, City, Campus } = require('../db/models');

const addInfoController = async (req, res) => {
  const { dataForm, id } = req.body;
  const {
    name,
    surName,
    countryName,
    cityName,
    currentCountryName,
    currentCityName,
    campusName,
  } = dataForm;

  console.log(currentCountryName,
    currentCityName);
  try {
    const country = await Country.findOne({ where: { countryName } });
    const city = await City.findOne({ where: { cityName } });
    let campus = { id: null };
    let currentCountry = { id: null };
    let currentCity = { id: null };
    let newCurrentCountry = { id: null };
    let newCurrentCity = { id: null };

    if (campusName) {
      campus = await Campus.findOne({ where: { campusName } });
    }

    if (currentCountryName) {
      currentCountry = await Country.findOne({ where: { countryName: currentCountryName } });
      if (currentCountry === null) {
        newCurrentCountry = await Country.create({ countryName: currentCountryName });
        newCurrentCity = await City.create({
          cityName: currentCityName,
          countrysId: newCurrentCountry.id,
        });
      }
    }

    if (currentCityName) {
      currentCity = await City.findOne({ where: { cityName: currentCityName } });
      if (currentCity === null) {
        newCurrentCity = await City.create({
          cityName: currentCityName,
          countrysId: currentCountry.id,
        });
        console.log(111);
      }
    }

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
          currentCountryId: (currentCountry.id || newCurrentCountry.id),
          currentCityId: (currentCity.id || newCurrentCity.id),
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
          currentCountryId: (currentCountry.id || newCurrentCountry.id),
          currentCityId: (currentCity.id || newCurrentCity.id),
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
          currentCountryId: (currentCountry.id || newCurrentCountry.id),
          currentCityId: (currentCity.id || newCurrentCity.id),
        },
        { where: { id } },
      );
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { addInfoController };
