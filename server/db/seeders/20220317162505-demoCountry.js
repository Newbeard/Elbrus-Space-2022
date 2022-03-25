module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Countries', [{
      countryName: 'Россия',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      countryName: 'Грузия',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      countryName: 'Армения',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      countryName: 'Казахстан',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      countryName: 'Кыргызстан',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      countryName: 'Узбекистан',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      countryName: 'Приднестровье',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      countryName: 'Молдова',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      countryName: 'Беларусь',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      countryName: 'Эритрея',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};
