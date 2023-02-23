const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Initiatives }) {
      this.belongsToMany(Initiatives, { foreignKey: 'User_id', through: 'Voites', as: 'Voite' });
      this.hasMany(Initiatives, { foreignKey: 'User_id', as: 'creator' });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    federal: DataTypes.STRING,
    region: DataTypes.STRING,
    municip: DataTypes.STRING,
    auth_google_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
