'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(
        models.User,
        {foreignKey: 'userId', onDelete: "CASCADE", hooks:true}
      ),
      Review.belongsTo(
        models.Spot,
        {foreignKey: 'spotId', onDelete: "CASCADE", hooks:true}
      ),
      Review.hasMany(
        models.Image,
        {foreignKey: 'reviewId', onDelete: "CASCADE", hooks:true}
      )
    }
  }
  Review.init({
    review: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {model: 'Users'}
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: null,
      unique: true,
      references: {model: 'Spots'}
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
