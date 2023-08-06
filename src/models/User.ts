const { Sequelize, DataTypes, Model } = require('sequelize');
const seq = require('../database/db.js');

class User extends Model {}

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  seq,
  modelName: 'User'
});
