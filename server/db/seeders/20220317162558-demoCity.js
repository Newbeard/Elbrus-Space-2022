module.exports = {
  async up(queryInterface, Sequelize) {
    const cityesss=[
      '55.737693, 37.723390',
      '55.744665, 37.491304',
      '55.636063, 37.566835',
      '55.865323, 37.599794',
      '55.741567, 37.960969',
    ]
    await queryInterface.bulkInsert('Cities', [{
      cityName: 'Москва',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Санкт-Петербург',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Тверь',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Пермь',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Краснодар',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Псков',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Челябинск',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Вологда',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Пермь',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Учалы',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Череповец',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Пятигорск',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Самара',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Иваново',
      countrysId: 1,
      coordinates: cityesss[Math.floor(Math.random() * (4 - 1 + 1)) + 1],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
