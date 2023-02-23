const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Initiative, Voite }) {
      this.belongsToMany(Initiative, { foreignKey: 'user_id', through: Voite });
      this.hasMany(Initiative, { foreignKey: 'user_id', as: 'creator' });
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
