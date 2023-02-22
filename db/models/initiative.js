const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    static associate({ User }) {
      this.belongsToMany(User, { foreignKey: 'Initiative_id', through: 'Voites', as: 'Voite' });
      this.hasMany(User, { foreignKey: 'User_id', as: 'creator' });
    }
  }
  Initiative.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
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
