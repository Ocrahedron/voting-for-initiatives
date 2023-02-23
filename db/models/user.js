const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Initiatives }) {
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    federal: DataTypes.STRING,
    region: DataTypes.STRING,
    municip: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
