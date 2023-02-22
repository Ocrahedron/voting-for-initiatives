const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Auth_google extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.hasOne(User, { foreignKey: 'Auth_google_id' });
    }
  }
  Auth_google.init({
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Auth_google',
  });
  return Auth_google;
};
