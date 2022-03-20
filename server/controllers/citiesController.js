const axios = require('axios');

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

// const getCoordinates = async (req, res) => {
//   try {
//     const allCities = await City.findAll({ raw: true, attributes: ['cityName'] });
//     console.log(allCities);

//     const arrCity = allCities.map(((el) => (el.cityName)));
//     console.log(arrCity);
//     arrCity.forEach((element) => {
//       const getCoordinate = axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=fa906837-e249-4c18-99ac-fb6aff0bc767&geocode=${encodeURIComponent(element)}`)
//         .then((response) => console.log(response.data.response.GeoObjectCollection.featureMember));

//       console.log(getCoordinate);
//     });
//     const [arrGeo] = getCoordinate.data.response.GeoObjectCollection.featureMember;
//     // res.json(getCoordinate);
//     console.log(arrGeo.GeoObject.Point.pos);
//     res.json(getCoordinate.data.response.GeoObjectCollection);

//     // console.log(allCities);

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
