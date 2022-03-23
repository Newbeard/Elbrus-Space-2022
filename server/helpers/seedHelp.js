const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');



const arr = new Array(30).fill('');
const users = arr.map((el) => el = {
  name: faker.name.firstName(),
  surName: faker.name.lastName(),
  email: faker.internet.email(),
  emailIsApproved: true,
  password: bcrypt.hashSync(faker.internet.password(), 10),
  telegram: faker.phone.phoneNumber(),
  github: faker.phone.phoneNumber(),
  isAdmin: false,
  isApproved: true,
  cityId: Math.floor(Math.random() * (4 - 1 + 1)) + 1,
  countryId: 1,
  campusId: Math.floor(Math.random() * (3 - 1 + 1)) + 1,
  currentCityId: Math.floor(Math.random() * (4 - 1 + 1)) + 1,
  currentCountryId: 1,
  monthFinishDate: 'Март',
  yearFinishDate: 2022,
  dateOfBirth: '10.10.2010',
  createdAt: new Date(),
  updatedAt: new Date(),
});
module.exports = { users };
