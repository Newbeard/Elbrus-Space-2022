const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Campus, City, Country }) {
      User.belongsTo(City, { as: 'currentCit', foreignKey: 'currentCity' });
      User.belongsTo(Country, { as: 'currentCou', foreignKey: 'currentCountry' });
      User.belongsTo(City, { foreignKey: 'cityId' });
      User.belongsTo(Country, { foreignKey: 'countryId' });
      User.belongsTo(Campus, { foreignKey: 'campusId' });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
    },
    surName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telegram: {
      type: DataTypes.STRING,
    },
    github: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
    },
    cityId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cities',
        key: 'id',
      },
    },
    countryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Countries',
        key: 'id',
      },
    },
    campusId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Campuses',
        key: 'id',
      },
    },
    currentCity: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cities',
        key: 'id',
      },
    },
    currentCountry: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Countries',
        key: 'id',
      },
    },
    finishDate: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
