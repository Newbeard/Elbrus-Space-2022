const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      City.belongsToMany(User, { foreignKey: 'cityId' });
      City.belongsToMany(User, { as: 'currentCit', foreignKey: 'currentCity' });
    }
  }
  City.init({
    cityName: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
