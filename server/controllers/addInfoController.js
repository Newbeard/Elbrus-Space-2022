/* eslint-disable no-lonely-if */
const { User, Country, City, Campus } = require('../db/models');

const addInfoController = async (req, res) => {
  const { dataForm, id } = req.body;
  const {
    name,
    surName,
    telegram,
    github,
    countryName,
    cityName,
    campusName,
    currentCountryName,
    currentCityName,
    dateOfBirth,
    yearFinishDate,
    monthFinishDate,
  } = dataForm;

  try {
    const country = await Country.findOne({ where: { countryName } });
    const city = await City.findOne({ where: { cityName } });
    let campus = { id: null };
    let currentCountry = { id: null };
    let currentCity = { id: null };

    if (campusName) {
      campus = await Campus.findOne({ where: { campusName } });
    }
    if (currentCountryName) {
      currentCountry = await Country.findOne({ where: { countryName: currentCountryName } });
      if (currentCityName) {
        currentCity = await City.findOne({ where: { cityName: currentCityName } });
      }
      if (currentCountry === null) {
        currentCountry = await Country.create({ countryName: currentCountryName });
        if (currentCityName) {
          currentCity = await City.create({
            cityName: currentCityName,
            countrysId: currentCountry.id,
          });
        }
        if (!country) {
          const newCountry = await Country.create({ countryName });
          const newCity = await City.create({ cityName, countrysId: newCountry.id });
          await User.update(
            {
              name,
              surName,
              telegram,
              github,
              countryId: newCountry.id,
              cityId: newCity.id,
              campusId: campus.id,
              currentCountryId: currentCountry.id,
              currentCityId: currentCity.id,
              dateOfBirth,
              yearFinishDate,
              monthFinishDate,
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
              currentCountryId: currentCountry.id,
              currentCityId: currentCity.id,
              telegram,
              github,
              dateOfBirth,
              yearFinishDate,
              monthFinishDate,
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
              currentCountryId: currentCountry.id,
              currentCityId: currentCity.id,
              telegram,
              github,
              dateOfBirth,
              yearFinishDate,
              monthFinishDate,
            },
            { where: { id } },
          );
        }
      } else if (currentCity === null) {
        if (currentCityName) {
          currentCity = await City.create({
            cityName: currentCityName,
            countrysId: currentCountry.id,
          });
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
              currentCountryId: currentCountry.id,
              currentCityId: currentCity.id,
              telegram,
              github,
              dateOfBirth,
              yearFinishDate,
              monthFinishDate,
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
              currentCountryId: currentCountry.id,
              currentCityId: currentCity.id,
              telegram,
              github,
              dateOfBirth,
              yearFinishDate,
              monthFinishDate,
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
              currentCountryId: currentCountry.id,
              currentCityId: currentCity.id,
              telegram,
              github,
              dateOfBirth,
              yearFinishDate,
              monthFinishDate,
            },
            { where: { id } },
          );
        }
      }
    } else {
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
            currentCountryId: currentCountry.id,
            currentCityId: currentCity.id,
            telegram,
            github,
            dateOfBirth,
            yearFinishDate,
            monthFinishDate,
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
            currentCountryId: currentCountry.id,
            currentCityId: currentCity.id,
            telegram,
            github,
            dateOfBirth,
            yearFinishDate,
            monthFinishDate,
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
            currentCountryId: currentCountry.id,
            currentCityId: currentCity.id,
            telegram,
            github,
            dateOfBirth,
            yearFinishDate,
            monthFinishDate,
          },
          { where: { id } },
        );
      }
    }

    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { addInfoController };
