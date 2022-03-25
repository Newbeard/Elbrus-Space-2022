module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      {
        cityName: 'Санкт-Петербург',
        countrysId: 1,
        coordinates: '59.938955, 30.315644',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: 'Калининград',
        countrysId: 1,
        coordinates: '54.710162, 20.510137',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: 'Барнаул',
        countrysId: 1,
        coordinates: '53.346785, 83.776856',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: 'Сургут',
        countrysId: 1,
        coordinates: '61.241778, 73.393032',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: 'Киров',
        countrysId: 1,
        coordinates: '58.603595, 49.668023',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: 'Ижевск',
        countrysId: 1,
        coordinates: '56.852676, 53.2069',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: 'Сургут',
        countrysId: 1,
        coordinates: '61.241778, 73.393032',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: 'Грозный',
        countrysId: 1,
        coordinates: '43.318366, 45.692421',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: 'Екатеринбург',
        countrysId: 1,
        coordinates: '61.241778, 73.393032',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: 'Ейск',
        countrysId: 1,
        coordinates: '46.711944, 38.27266',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: 'Нижний Новгород',
        countrysId: 1,
        coordinates: '56.326797, 44.006516',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
