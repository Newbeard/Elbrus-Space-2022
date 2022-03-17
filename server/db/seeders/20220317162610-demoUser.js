const { users } = require('../../helpers/seedHelp');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
