'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
    	allowNull: false,
    	primaryKey: true,
    	type: DataTypes.UUID,
    	defaultValue: DataTypes.UUIDV4
    },
    email: { 
    	type: DataTypes.STRING,
    	unique: true
    },
    password: { 
    	type: DataTypes.STRING,
    	allowNull: false
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};