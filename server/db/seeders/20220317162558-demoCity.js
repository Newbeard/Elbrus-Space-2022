const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');

async function getCoordinates(city) {
  const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=00fafa0b-f7c2-4437-b835-88efced698f3&geocode=${encodeURIComponent(city)}&results=10`);
  const invalidCoordinates = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
  return invalidCoordinates.split(' ').join(', ');
}
async function seedCity() {
  const data = await fs.readFile(path.join(process.env.PWD, 'helpers', 'students', 'students.csv'), 'utf8');
  // const arrNew = array.slice(0, -1);
  const arr = data.trim().split('\n');
  const newArray = arr.map((string) => string.split(','));
  const cities = [];
  for (let i = 0; i < newArray.length; i += 1) {
    const coor = await getCoordinates(newArray[i][3]);
    cities.push({
      cityName: newArray[i][3],
      countrysId: 1,
      coordinates: coor,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return cities;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    const cities = await seedCity();

    await queryInterface.bulkInsert('Cities', cities, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
