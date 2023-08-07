const { Sequelize, DataTypes, Model } = require('sequelize');
const seq = require('../database/db.js');

class User extends Model {}

User.init({
  nickName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  seq,
  modelName: 'User'
});
