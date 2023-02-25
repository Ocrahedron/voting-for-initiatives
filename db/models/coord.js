const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Coord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Initiative }) {
      this.belongsTo(Initiative, { foreignKey: "initiative_id" });
    }
  }
  Coord.init(
    {
      initiative_id: DataTypes.INTEGER,
      x: DataTypes.FLOAT,
      y: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Coord",
    }
  );
  return Coord;
};
