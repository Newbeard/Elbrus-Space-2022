module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      // создали одну запись в таблице Groups
      // id присвоится автоматическии (такой свойство у столбца id)
      {
        question: 'Любимая тема Артема на второй фазе',
        answer: 'Fetch',
        category_id: 1,
        price: '250',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Второе имя Никитоса',
        answer: 'Doctor Back',
        category_id: 1,
        price: '500',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Второе имя Лехи',
        answer: 'Doctor push',
        category_id: 1,
        price: '1000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Второе имя Анжелика',
        answer: 'Proffesor ...',
        category_id: 1,
        price: '2000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Не лает не кусается,точно так же называется?',
        answer: '@',
        category_id: 2,
        price: '250',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'У неба 1,у бабы 2,а у девки не 1?',
        answer: 'Буква б',
        category_id: 2,
        price: '500',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Осенью питает,зимой согревает, весной веселит, летом холодит?',
        answer: 'Водка',
        category_id: 2,
        price: '1000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какое млекопетающее говорит "Чык-чырык',
        answer: 'Лукашенко',
        category_id: 2,
        price: '2000',
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
