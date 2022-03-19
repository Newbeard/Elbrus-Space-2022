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
    static associate({ User, Country }) {
      City.hasMany(User, { foreignKey: 'cityId' });
      City.hasMany(User, { foreignKey: 'currentCity' });
      City.belongsTo(Country, { foreignKey: 'countrysId' });
    }
  }
  City.init({
    cityName: {
      type: DataTypes.TEXT,
    },
    countrysId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Countries',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
