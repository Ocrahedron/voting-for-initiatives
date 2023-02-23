const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    static associate({ User, Coord, Voite }) {
      this.belongsToMany(User, { foreignKey: 'initiative_id', through: Voite });
      this.hasMany(User, { foreignKey: 'user_id', as: 'creator' });
      this.hasMany(Coord, { foreignKey: 'initiative_id' });
    }
  }
  Initiative.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    body: DataTypes.STRING,
    level: DataTypes.STRING,
    voites_no: DataTypes.INTEGER,
    voites_yes: DataTypes.INTEGER,
    data_end: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Initiative',
  });
  return Initiative;
};
