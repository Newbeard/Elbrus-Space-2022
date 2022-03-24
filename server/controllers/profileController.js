/* eslint-disable no-shadow */
/* eslint-disable no-lonely-if */
const axios = require('axios');
const {
  User,
  City,
  Country,
  Campus,
} = require('../db/models');

const initProfile = async (req, res) => {
  try {
    const {
      id,
    } = req.session.user;

    const user = await User.findOne({
      where: {
        id,
      },
      raw: true,
      include: [{
        model: City,
        attributes: ['cityName'],
      },
      {
        model: Country,
        attributes: ['countryName'],
      },
      {
        model: Campus,
        attributes: ['campusName'],
      },
      {
        model: City,
        as: 'currentCit',
        attributes: ['cityName'],
      },
      {
        model: Country,
        as: 'currentCou',
        attributes: ['countryName'],
      },
      ],

    });
    res.json({ user });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
};

const editProfile = async (req, res) => {
  const {
    id,
  } = req.session.user;
  const data = req.body;
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
  } = data;
  try {
    const country = await Country.findOne({ where: { countryName } });
    const city = await City.findOne({ where: { cityName } });
    let campus = { id: null };
    let currentCountry = { id: null };
    let currentCity = { id: null };

    if (campusName && campusName !== 'Кампус') {
      campus = await Campus.findOne({ where: { campusName } });
    }
    if (currentCountryName) {
      currentCountry = await Country.findOne({ where: { countryName: currentCountryName } });
      if (currentCityName) {
        currentCity = await City.findOne({ where: { cityName: currentCityName } });
      }
      if (currentCountry === null) {
        currentCountry = await Country.create({ countryName: currentCountryName });
        const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=00fafa0b-f7c2-4437-b835-88efced698f3&geocode=${encodeURIComponent(cityName)}&results=10`);
        const invalidCoordinates = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
        const coordinates = invalidCoordinates.split(' ').join(', ');
        if (currentCityName) {
          currentCity = await City.create({
            cityName: currentCityName,
            coordinates,
            countrysId: currentCountry.id,
          });
        }
        if (!country) {
          const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=00fafa0b-f7c2-4437-b835-88efced698f3&geocode=${encodeURIComponent(cityName)}&results=10`);
          const invalidCoordinates = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
          const coordinates = invalidCoordinates.split(' ').join(', ');
          const newCountry = await Country.create({ countryName });
          const newCity = await City.create({ cityName, coordinates, countrysId: newCountry.id });
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
          const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=00fafa0b-f7c2-4437-b835-88efced698f3&geocode=${encodeURIComponent(cityName)}&results=10`);
          const invalidCoordinates = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
          const coordinates = invalidCoordinates.split(' ').join(', ');
          const newCity = await City.create({ cityName, coordinates, countrysId: country.id });
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
          const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=00fafa0b-f7c2-4437-b835-88efced698f3&geocode=${encodeURIComponent(cityName)}&results=10`);
          const invalidCoordinates = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
          const coordinates = invalidCoordinates.split(' ').join(', ');
          currentCity = await City.create({
            cityName: currentCityName,
            coordinates,
            countrysId: currentCountry.id,
          });
        }
        if (!country) {
          const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=00fafa0b-f7c2-4437-b835-88efced698f3&geocode=${encodeURIComponent(cityName)}&results=10`);
          const invalidCoordinates = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
          const coordinates = invalidCoordinates.split(' ').join(', ');
          const newCountry = await Country.create({ countryName });
          const newCity = await City.create({ cityName, coordinates, countrysId: newCountry.id });
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
          const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=00fafa0b-f7c2-4437-b835-88efced698f3&geocode=${encodeURIComponent(cityName)}&results=10`);
          const invalidCoordinates = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
          const coordinates = invalidCoordinates.split(' ').join(', ');
          const newCity = await City.create({ cityName, coordinates, countrysId: country.id });
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
        const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=00fafa0b-f7c2-4437-b835-88efced698f3&geocode=${encodeURIComponent(cityName)}&results=10`);
        const invalidCoordinates = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
        const coordinates = invalidCoordinates.split(' ').join(', ');
        const newCountry = await Country.create({ countryName });
        const newCity = await City.create({ cityName, coordinates, countrysId: newCountry.id });
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
        const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=00fafa0b-f7c2-4437-b835-88efced698f3&geocode=${encodeURIComponent(cityName)}&results=10`);
        const invalidCoordinates = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
        const coordinates = invalidCoordinates.split(' ').join(', ');
        const newCity = await City.create({ cityName, coordinates, countrysId: country.id });
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
    const user = await User.findOne({
      where: {
        id,
      },
      raw: true,
      include: [{
        model: City,
        attributes: ['cityName'],
      },
      {
        model: Country,
        attributes: ['countryName'],
      },
      {
        model: Campus,
        attributes: ['campusName'],
      },
      {
        model: City,
        as: 'currentCit',
        attributes: ['cityName'],
      },
      {
        model: Country,
        as: 'currentCou',
        attributes: ['countryName'],
      },
      ],
    });
    res.json({ user });
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  initProfile,
  editProfile,
};
