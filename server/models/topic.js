import {Model} from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate(models) {
        Topic.hasMany(models.Subscription, {
          foreignKey: 'topicId',
          as: 'subscribers'
        })
    }
  
    toJson() {
      const values = Object.assign({}, this.get());
    
      delete values['createdAt'];
      delete values['updatedAt'];
      return values;
    }
  }
  Topic.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Topic',
  })
  return Topic;
};