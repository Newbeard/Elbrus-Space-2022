module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      // создали одну запись в таблице Groups
      // id присвоится автоматическии (такой свойство у столбца id)
      {
        name: 'Вопросы о команде',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Смекалочка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
