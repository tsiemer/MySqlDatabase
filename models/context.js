'use strict';
module.exports = (sequelize, DataTypes) => {
  var Context = sequelize.define('Context', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING
  }, {});
  Context.associate = function(models) {
    Context.hasMany(models.Task, {
      foreignKey: 'ContextId',
      onDelete: 'CASCADE'
    });
    Context.belongsTo(models.User, {
      foreignKey: 'ContextId',
      onDelete: 'CASCADE'
    });
    // associations can be defined here
  };
  return Context;
};