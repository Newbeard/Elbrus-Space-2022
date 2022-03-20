module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      surName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      emailIsApproved: {
        type: Sequelize.BOOLEAN,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telegram: {
        type: Sequelize.STRING,
      },
      github: {
        type: Sequelize.STRING,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
      },
      isApproved: {
        type: Sequelize.BOOLEAN,
      },
      cityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id',
        },
      },
      countryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Countries',
          key: 'id',
        },
      },
      campusId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Campuses',
          key: 'id',
        },
      },
      currentCityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id',
        },
      },
      currentCountryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Countries',
          key: 'id',
        },
      },
      dateOfBirth: {
        type: Sequelize.STRING,
      },
      monthFinishDate: {
        type: Sequelize.STRING,
      },
      yearFinishDate: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
