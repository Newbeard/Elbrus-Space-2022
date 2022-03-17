module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [{
      cityName: 'Москва',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Санкт-Петербург',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Тверь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Пермь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Краснодар',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Псков',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Челябинск',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Вологда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Пермь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Учалы',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Череповец',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Пятигорск',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Самара',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cityName: 'Иваново',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
