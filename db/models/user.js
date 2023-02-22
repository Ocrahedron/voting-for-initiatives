const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Auth_google, Initiatives }) {
      this.belongsTo(Auth_google, { foreignKey: 'Auth_google_id' });
      this.belongsToMany(Initiatives, { foreignKey: 'User_id', through: 'Voites', as: 'Voite' });
      this.hasMany(Initiatives, { foreignKey: 'User_id', as: 'creator' });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
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
