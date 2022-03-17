const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Campus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Campus.belongsToMany(User, { foreignKey: 'campusId' });
    }
  }
  Campus.init({
    campusName: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Campus',
  });
  return Campus;
};
