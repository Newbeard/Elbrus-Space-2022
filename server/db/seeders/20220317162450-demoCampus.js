module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Campuses', [{
      campusName: 'Москва',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      campusName: 'Санкт-Петербург',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      campusName: 'Онлайн',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Campuses', null, {});
  },
};
