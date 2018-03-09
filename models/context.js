'use strict';
module.exports = (sequelize, DataTypes) => {
  var Context = sequelize.define('Context', {
    name: DataTypes.STRING
  }, {});
  Context.associate = function(models) {
    // associations can be defined here
  };
  return Context;
};