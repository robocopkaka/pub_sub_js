'use strict';
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    toJson() {
      const values = Object.assign({}, this.get());
  
      delete values['createdAt'];
      delete values['updatedAt'];
      return values;
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subscription.belongsTo(models.Topic, {
        foreignKey: 'topicId',
        onDelete: 'CASCADE'
      })
    }
  }
  Subscription.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};