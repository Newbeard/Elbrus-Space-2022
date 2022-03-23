const fs = require('fs').promises;

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await fs.readFile('./../students/students.csv');

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
