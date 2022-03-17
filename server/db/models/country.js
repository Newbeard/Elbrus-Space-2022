const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Country.hasMany(User, { foreignKey: 'cityId' });
      Country.hasMany(User, { foreignKey: 'currentCity' });
    }
  }
  Country.init({
    countryName: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};
