module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [{
      cityName: 'Москва',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Санкт-Петербург',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Тверь',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Пермь',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Краснодар',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Псков',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Челябинск',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Вологда',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Пермь',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Учалы',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Череповец',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Пятигорск',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Самара',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Иваново',
      countrysId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
