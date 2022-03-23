const axios = require('axios');
const { City } = require('../db/models');

const getCoordinates = async (req, res) => {
  const { cityName } = req.body;
  console.log(11111111111111111111111);
  try {
    const allCities = await City.findAll({ raw: true, attributes: ['cityName'] });
    const arrCity = allCities.map((el) => el.cityName);
    const elllll = 'Иваново';
    const arr = [
      'Москва', 'Санкт-Петербург',
      'Тверь', 'Пермь',
      'Краснодар', 'Псков',
      'Челябинск', 'Вологда',
      'Пермь', 'Учалы',
      'Череповец', 'Пятигорск',
      'Самара', 'Иваново',
    ];
    // const b = arr.map(async (el) => el = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=fa906837-e249-4c18-99ac-fb6aff0bc767&geocode=${encodeURIComponent(el)}&results=1`) );
    // console.log(b);

    // console.log(arrCity, '---arr');
    // console.log(allCities, '---all');
    const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=fa906837-e249-4c18-99ac-fb6aff0bc767&geocode=${encodeURIComponent(cityName)}&results=10`);
    // console.log(arrCity, 'city');
    const point = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
    console.log(getCoordinate.data);

    res.send(point);
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

module.exports = getCoordinates;
