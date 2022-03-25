const fs = require('fs').promises;
const axios = require('axios');

async function getCoordinates(city) {
  const getCoordinate = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=fa906837-e249-4c18-99ac-fb6aff0bc767&geocode=${encodeURIComponent(city)}&results=10`);
  const invalidCoordinates = getCoordinate.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(' ');
  return invalidCoordinates.split(' ').join(', ');
}
async function seedCity() {
  const array = await fs.readFile('./students/students.csv', 'utf8');
  const arrNew = array.slice(0, -1);
  const arr = arrNew.split('\n');
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
  // console.log(111111111);
  // console.log(cities);
  return cities;
}
seedCity();
module.exports = { seedCity };
